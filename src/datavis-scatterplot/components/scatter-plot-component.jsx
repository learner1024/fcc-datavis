import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class ScatterPlotComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div><svg></svg><div className='scatterplot-tooltip'></div></div>
        )
    }
    componentDidUpdate(){
        let scatterData = this.props.scatterData;
        let thisNode = ReactDOM.findDOMNode(this);


        // let tooltipWidth = 50;
        // let tooltipHeight = 30;

        // let tooltipBox = d3.select(thisNode).select('.scatterplot-tooltip')
        //     .style('width', tooltipWidth)
        //     .style('height', tooltipHeight)
        //     .style('opacity', 0)

        
        let svg = d3.select(thisNode).select('svg');        
        
        const svgWidth = 960;
        const svgHeight = 500;

        let margin = {top: 5, right: 15, bottom: 40, left: 20};
        let graphWidth = svgWidth - margin.right - margin.left;
        let graphHeight = svgHeight - margin.top - margin.bottom;

        let yearExtent = d3.extent(scatterData, d => d.Year);
        let rankExtent = d3.extent(scatterData, d => d.Place);
        
        let xScale = d3.scaleTime().domain([new Date(yearExtent[0].getYear() - 2, 0, 1), yearExtent[1]]).range([0, graphWidth]);
        let yScale = d3.scaleLinear().domain([0, rankExtent[1]]).range([graphHeight, 0])
        
        let xAxis = d3.axisBottom(xScale);
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
        container.selectAll('circle')
            .data(scatterData)
            .enter()
            .append('circle') //<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
                .attr('class', 'scatter-ball')
                .attr('cx', d => xScale(d.Year))
                .attr('cy', d => yScale(d.Place))
                .attr('r', 10)
                .attr('fill', 'gray');



        // const rectWidth = Math.ceil(graphWidth / scatterData.length);
        // container.selectAll('rect')
        //     .data(scatterData)
        //     .enter()
        //     .append('rect')
        //         .attr('class', 'bar')
        //         .attr('x', (d) => margin.left + xScale(d.quarterStartDate) )
        //         .attr('y', (d) => yScale(d.gdpValue))
        //         .attr('width', rectWidth)
        //         .attr('height', (d) => margin.top + graphHeight - yScale(d.gdpValue))
        //         .attr('fill', 'teal')
        //         .on('mouseover', (d, i) => {
        //             let mouseCoords = d3.mouse(d3.event.currentTarget);
        //             tooltipBox.transition()
        //                 .duration(200)
        //                 .style('opacity', 0.9)
        //             tooltipBox.html(`<span>${d.quarterStartDate.getFullYear()} - ${this.getQuarterString(d.quarterStartDate.getMonth())} : ${d.gdpValue}</span>`)
        //                 .style('left', mouseCoords[0] + 'px')
        //                 .style('top', mouseCoords[1] + 'px')
        //         })
        //         .on('mouseout', (d, i) => {
        //             tooltipBox.transition()		
        //                 .duration(500)		
        //                 .style('opacity', 0)
        //         })

        
    }
}
export default ScatterPlotComponent;