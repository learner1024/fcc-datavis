import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class BarGraphComponent extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (<svg width='100%' height='90vh'></svg>)
    }
    componentDidUpdate(){
        let thisNode = ReactDOM.findDOMNode(this);

        let svg = d3.select(thisNode)
            .selectAll('line')
            .data(this.props.barData)
            .enter()
            .append('line')
                .attr('x1', 0)
                .attr('y1', (d, i) => i * 5)
                .attr('x2', (d) => (d[1]))
                .attr('y2', (d, i) => i * 5)
                .attr('stroke', 'black')
                .attr('stroke-width', 30.5)
    }
}

export default BarGraphComponent;

