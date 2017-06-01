import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class FDGComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className='fdg-tooltip'></div>
                <div className='fdg-flags'></div>
                <svg></svg>
            </div>
        );
    }    
    componentDidUpdate(){
        let nodes = this.props.fdgData.nodes;
        let links = this.props.fdgData.links;        

        let thisNode = ReactDOM.findDOMNode(this);
        let tooltipWidth = 50;
        let tooltipHeight = 30;
        let tooltipBox = d3.select(thisNode).select('.fdg-tooltip')
            .style('width', tooltipWidth)
            .style('height', tooltipHeight)
            .style('opacity', 0)
            .style('z-index', 1000)
        
        let svg = d3.select(thisNode).select('svg');

        const svgWidth = 960;
        const svgHeight = 600;

        svg.attr('width', svgWidth).attr('height', svgHeight);

        let container = svg.append('g').attr('class', 'graph-container')
        let linesContainer = container.append('g').attr('class', 'lines-c')
        let flagsContainer = d3.select(thisNode).select('.fdg-flags');
        
        let forceSim = d3.forceSimulation()
            .force("link", d3.forceLink().id(d => d.index))
            .force("charge", d3.forceManyBody().strength(-50))
            .force("center", d3.forceCenter(svgWidth / 2, svgHeight / 2))
            .force("y", d3.forceY(0))
            .force("x", d3.forceX(0));

        let flags = flagsContainer.selectAll('div')
            .data(nodes)
            .enter()
            .append('div')
                .attr('class', d => `flag flag-${d.code}`)
                .call(d3.drag()
                    .on("start", (d) => {
                        if (!d3.event.active) forceSim.alphaTarget(0.3).restart();
                        d.fx = d.x;
                        d.fy = d.y;
                    })
                    .on("drag", (d) => {
                        d.fx = d3.event.x;
                        d.fy = d3.event.y;
                    })
                    .on("end", (d) => {
                        if (!d3.event.active) forceSim.alphaTarget(0);
                        delete d.fx;
                        delete d.fy;
                    } ))
        let lines = linesContainer.selectAll('line')
            .data(links)
            .enter()            
            .append('line')
                .attr('stroke-width', 1)
                .attr('stroke', 'teal');

        forceSim
            .nodes(nodes)
            .on("tick", function(){
                lines
                    .attr("x1", d => d.source.x)
                    .attr("y1", d => d.source.y)
                    .attr("x2", d => d.target.x)
                    .attr("y2", d => d.target.y)

                flags
                    .style('left', d => d.x+'px')
                    .style('top', d => d.y+65+'px')      
                flags
                    .on('mouseover', d => {
                        tooltipBox.transition()
                            .duration(200)
                            .style('opacity', 0.9)                        
                        tooltipBox.html(d.country)
                            .style('left', `${d.x + 20}px`)
                            .style('top', `${d.y+65}px`)
                            
                    })
                    .on('mouseout', (d, i) => {
                        tooltipBox.transition()		
                            .duration(500)		
                            .style('opacity', 0)
                    })
                    
            })

        forceSim
            .force("link").links(links);
    }
}

export default FDGComponent;