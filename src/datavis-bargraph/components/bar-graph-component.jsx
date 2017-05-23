import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class BarGraphComponent extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (<svg width='1000' height='1000'></svg>)
    }
    componentDidUpdate(){
        let vals = this.props.barData.map((d) => d.gdpValue);
        let myScale = d3.scaleLinear().domain([0, Math.max(...vals)]).range([0, 500]);
        let thisNode = ReactDOM.findDOMNode(this);

        let svg = d3.select(thisNode)
            .selectAll('line')
            .data(this.props.barData)
            .enter()
            .append('line')
                .attr('x1', 0)
                .attr('y1', (d, i) => i * 2)
                .attr('x2', (d) => myScale(d.gdpValue))
                .attr('y2', (d, i) => i * 2)
                .attr('stroke', 'black')
                .attr('stroke-width', 0.2)
    }
}

export default BarGraphComponent;

