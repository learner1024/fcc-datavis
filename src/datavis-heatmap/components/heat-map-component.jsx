import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
class HeatmapComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div><svg></svg><div className='heatmap-tooltip'></div></div>
        )
    }
    componentDidUpdate(){
        let thisNode = ReactDOM.findDOMNode(this);


        // let tooltipWidth = 50;
        // let tooltipHeight = 30;

        // let tooltipBox = d3.select(thisNode).select('.bargraph-tooltip')
        //     .style('width', tooltipWidth)
        //     .style('height', tooltipHeight)
        //     .style('opacity', 0)

        let months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        let svg = d3.select(thisNode).select('svg');        
        
        const svgWidth = 960;
        const svgHeight = 500;

        let margin = {top: 5, right: 5, bottom: 40, left: 40};
        let graphWidth = svgWidth - margin.right - margin.left;
        let graphHeight = svgHeight - margin.top - margin.bottom;

        let yearExtent = d3.extent(this.props.heatmapData, d => d.date);
        let monthExtent = d3.extent(this.props.heatmapData, d => d.month);
        let varianceExtent = d3.extent(this.props.heatmapData, d => d.variance);
        
        let xScale = d3.scaleTime().domain(yearExtent).range([0, graphWidth]);
        let yScale = d3.scaleLinear().domain([monthExtent[0] - 0.5, monthExtent[1] + 0.5]).range([graphHeight, 0])
        let colorScale = d3.scaleLinear().domain(varianceExtent).range([100, 0]);
        
        let xAxis = d3.axisBottom(xScale).ticks(d3.timeYear.every(10));
        let yAxis = d3.axisLeft(yScale);

        svg.attr('width', svgWidth).attr('height', svgHeight);



        let container = svg.append('g').attr('class', 'graph-container')
        container.append("g")
                .attr('class', 'axis x')
                .attr("transform", `translate(${margin.left}, ${margin.right + graphHeight})`)
                .call(xAxis);
        container.append("g")
                .attr('class', 'axis y')
                .attr("transform", `translate(${margin.left}, ${margin.right})`)
                .call(yAxis);

        const rectWidth = xScale(new Date(2015, 1, 1)) - xScale(new Date(2014, 1, 1));
        const rectHeight = yScale(1) - yScale(2);
        const rectHeightBy2 = rectHeight / 2;
        container.selectAll('rect')
            //.data([this.props.heatmapData[0]])
            .data(this.props.heatmapData)
            .enter()
            .append('rect')
                .attr('class', 'heatmap-block')
                .attr('x', (d) => margin.left + xScale(d.date) )
                .attr('y', (d) => margin.top + yScale(d.month) - rectHeightBy2)
                .attr('width', rectWidth)
                .attr('height', rectHeight)
                .attr('fill', d => `hsla(${colorScale(d.variance)}, 100%, 60%, 0.8)`)
                .attr('dt', d => d.variance)
                // .on('mouseover', (d, i) => {
                //     let mouseCoords = d3.mouse(d3.event.currentTarget);
                //     tooltipBox.transition()
                //         .duration(200)
                //         .style('opacity', 0.9)
                //     tooltipBox.html(`<span>${d.quarterStartDate.getFullYear()} - ${this.getQuarterString(d.quarterStartDate.getMonth())} : ${d.gdpValue}</span>`)
                //         .style('left', mouseCoords[0] + 'px')
                //         .style('top', mouseCoords[1] + 'px')
                // })
                // .on('mouseout', (d, i) => {
                //     tooltipBox.transition()		
                //         .duration(500)		
                //         .style('opacity', 0)
                // })
    }
}

export default HeatmapComponent;