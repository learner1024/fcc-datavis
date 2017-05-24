import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class BarGraphComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<svg></svg>)
    }
    componentDidUpdate(){
        let thisNode = ReactDOM.findDOMNode(this);
        let svg = d3.select(thisNode);        
        
        const svgWidth = 960;
        const svgHeight = 500;

        let margin = {top: 5, right: 5, bottom: 40, left: 40};
        let graphWidth = svgWidth - margin.right - margin.left;
        let graphHeight = svgHeight - margin.top - margin.bottom;

        let minGdp = d3.min(this.props.barData, (d) => d.gdpValue);
        let minTime = d3.min(this.props.barData, (d) => new Date(d.quarterStartDate))        
        let maxGdp = d3.max(this.props.barData, (d) => d.gdpValue);
        let maxTime = d3.max(this.props.barData, (d) => new Date(d.quarterStartDate))
        
        let xScale = d3.scaleTime().domain([minTime, maxTime]).range([0, graphWidth]);
        let yScale = d3.scaleLinear().domain([minGdp, maxGdp]).range([graphHeight, 0])
        
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
                .attr('x', (d) => margin.left + xScale(new Date(d.quarterStartDate)) )
                .attr('y', (d, i) => yScale(d.gdpValue))
                .attr('width', rectWidth)
                .attr('height', (d) => margin.top + graphHeight - yScale(d.gdpValue))
                .attr('fill', 'grey')
    }
}

export default BarGraphComponent;

