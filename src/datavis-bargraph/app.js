import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class BarGraph extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const square = d3.selectAll("rect");
        square.style("fill", "orange");
    }
    render(){
        return (
            <svg width={this.props.width} height={this.props.height}>
                <rect x="20" y="20" width="20px" height="20" rx="5" ry="5" />
                <rect x="60" y="20" width="20px" height="20" rx="5" ry="5" />
                <rect x="100" y="20" width="20px" height="20" rx="5" ry="5"/>
            </svg>
        );
    }
}

ReactDOM.render(<BarGraph width='300px' height='150px' />, document.querySelector('#app5Container'));