import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

import '../styles/bar-graph-styles.scss';

class BarGraphComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div><svg></svg><div className='graph-tooltip'></div></div>)
    }
    componentDidUpdate(){
        let thisNode = ReactDOM.findDOMNode(this);


        let tooltipWidth = 50;
        let tooltipHeight = 30;

        let tooltipBox = d3.select(thisNode).select('.graph-tooltip')
            .style('width', tooltipWidth)
            .style('height', tooltipHeight)
            .style('opacity', 0)

        
        let svg = d3.select(thisNode).select('svg');        
        
        const svgWidth = 960;
        const svgHeight = 500;

        let margin = {top: 5, right: 5, bottom: 40, left: 40};
        let graphWidth = svgWidth - margin.right - margin.left;
        let graphHeight = svgHeight - margin.top - margin.bottom;

        let gdpExtent = d3.extent(this.props.barData, d => d.gdpValue);
        let timeExtent = d3.extent(this.props.barData, d => d.quarterStartDate);
        
        let xScale = d3.scaleTime().domain(timeExtent).range([0, graphWidth]);
        let yScale = d3.scaleLinear().domain(gdpExtent).range([graphHeight, 0])
        
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

        const rectWidth = Math.ceil(graphWidth / this.props.barData.length);
        container.selectAll('rect')
            .data(this.props.barData)
            .enter()
            .append('rect')
                .attr('class', 'bar')
                .attr('x', (d) => margin.left + xScale(d.quarterStartDate) )
                .attr('y', (d) => yScale(d.gdpValue))
                .attr('width', rectWidth)
                .attr('height', (d) => margin.top + graphHeight - yScale(d.gdpValue))
                .attr('fill', 'teal')
                .on('mouseover', (d, i) => {
                    let mouseCoords = d3.mouse(d3.event.currentTarget);
                    tooltipBox.transition()
                        .duration(200)
                        .style('opacity', 0.9)
                    tooltipBox.html('<span>'+ d.gdpValue +'</span>')
                        .style('left', mouseCoords[0] + 'px')
                        .style('top', mouseCoords[1] + 'px')
                })
                .on('mouseout', (d, i) => {
                    tooltipBox.transition()		
                        .duration(500)		
                        .style('opacity', 0)
                })

        
    }
}

export default BarGraphComponent;

