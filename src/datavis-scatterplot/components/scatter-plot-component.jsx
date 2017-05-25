import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class ScatterPlotComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <svg></svg>
                <div className='scatterplot-tooltip'></div>
                <div>
                    <h3>Info</h3>
                    <p>X Axis - Year</p>
                    <p>Y Axis - Rank</p>
                    <p>Smaller Scatter Ball - Lesser timespan to finish, hover to get more details</p>
                    <p>Bigger Scatter Ball - More timespan to finish, hover to get more details</p>
                    <p>Scatter Ball with red outline - Cyclist involved in Doping. See tooltip for more details</p>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        let scatterData = this.props.scatterData;
        let thisNode = ReactDOM.findDOMNode(this);


        let tooltipWidth = 50;
        let tooltipHeight = 30;

        let tooltipBox = d3.select(thisNode).select('.scatterplot-tooltip')
            .style('width', tooltipWidth)
            .style('height', tooltipHeight)
            .style('opacity', 0)

        
        let svg = d3.select(thisNode).select('svg');        
        
        const svgWidth = 960;
        const svgHeight = 500;

        let margin = {top: 5, right: 15, bottom: 40, left: 20};
        let graphWidth = svgWidth - margin.right - margin.left;
        let graphHeight = svgHeight - margin.top - margin.bottom;

        let yearExtent = d3.extent(scatterData, d => d.Year);
        let rankExtent = d3.extent(scatterData, d => d.Place);
        let secondsExtent = d3.extent(scatterData, d => d.Seconds);
        
        let xScale = d3.scaleTime().domain([
            new Date(yearExtent[0].getFullYear() - 2, 0, 1), 
            new Date(yearExtent[1].getFullYear() + 2, 0, 1)            
        ]).range([0, graphWidth]);
        let yScale = d3.scaleLinear().domain([
            0, 
            rankExtent[1] + 5
        ]).range([graphHeight, 0])
        let zScale = d3.scaleLinear().domain(secondsExtent).range([10, 30]);
        
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
        let scatterBalls = container.selectAll('g.scatter-ball')
            .data(scatterData)
            .enter()
            .append('g')
            .attr('class', 'scatter-ball');
                

        scatterBalls            
            .append('circle')           
                .attr('cx', d => margin.left + xScale(d.Year))
                .attr('cy', d => margin.top + yScale(d.Place))
                .attr('r', d => zScale(d.Seconds))
                .attr('fill', 'teal')
                .attr('stroke', d => {
                    if(d.Doping && d.URL){
                        return 'red'
                    }
                })
                .attr('stroke-width', d => {
                    if(d.Doping && d.URL){
                        return 3
                    }
                })
                .attr('opacity', '0.3')
                .on('mouseover', (d, i) => {
                    let mouseCoords = d3.mouse(d3.event.currentTarget);
                    let dopingHref = '';
                    if(d.URL && d.Doping){
                        dopingHref = `<br /><span><a href=${d.URL}>${d.Doping}</a></span>`
                    }
                    tooltipBox.transition()
                        .duration(200)
                        .style('opacity', 0.9)
                    tooltipBox.html(`<span>#${d.Place}(${d.Time}S) : ${d.Nationality} - ${d.Name}</span>${dopingHref}`)
                        .style('left', mouseCoords[0] + 'px')
                        .style('top', mouseCoords[1] + 'px')
                })
                .on('mouseout', (d, i) => {
                    tooltipBox.transition()		
                        .duration(500)		
                        .style('opacity', 0)
                })
        // scatterBalls            
        //     .append('text')             
        //         .attr('x', d => margin.left + xScale(d.Year))
        //         .attr('y', d => margin.top + yScale(d.Place))
        //         .attr('r', d => zScale(d.Seconds))
        //         .attr('fill', 'blue')      
        //         .text(d => `#${d.Place}`)
    }
}
export default ScatterPlotComponent;