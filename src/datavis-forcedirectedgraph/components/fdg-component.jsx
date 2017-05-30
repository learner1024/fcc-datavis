import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class FDGComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div><svg></svg><div className='fdg-tooltip'></div></div>
        );
    }    
    componentDidUpdate(){

        let nodes = this.props.fdgData.nodes.slice(0);
        let links = this.props.fdgData.links.slice(0);        

        let thisNode = ReactDOM.findDOMNode(this)
        
        let svg = d3.select(thisNode).select('svg');

        const svgWidth = 960;
        const svgHeight = 500;

        svg.attr('width', svgWidth).attr('height', svgHeight);

        let container = svg.append('g').attr('class', 'graph-container')
        let circlesContainer = container.append('g').attr('class', 'circles-c')
        let linesContainer = container.append('g').attr('class', 'lines-c')

        
        let forceSim = d3.forceSimulation()
            .force("link", d3.forceLink().id(d => d.index))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(svgWidth / 2, svgHeight / 2))


        let circles = container.selectAll('circle')
            .data(nodes)
            .enter()            
            .append('circle')
                .attr('r', 2.5)
                .attr('fill', 'teal');

        let lines = container.selectAll('line')
            .data(links)
            .enter()            
            .append('line')
                .attr('stroke-width', 1)
                .attr('stroke', 'teal');

        forceSim
            .nodes(nodes)
            .on("tick", function(){
                lines
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                circles
                    .attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; });
            });

        forceSim
            .force("link").links(links);
    }
}

export default FDGComponent;