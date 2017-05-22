import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

import SvgHorizLine from './components/svg-horiz-line.jsx';

class BarGraph extends Component{
    retrieveDataForBarGraph(){
        fetch('/data/us-gdp.json')
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                this.setState({
                    data: jsonData.data
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    constructor(props){
        super(props);
        //fetch data
        this.state = {data: []};
        this.retrieveDataForBarGraph();
    }
    componentDidMount(){
        const square = d3.selectAll('rect');
        square.style('fill', 'orange');
    }
    render(){
        let distBetweenLines = 5;

        return (
            <svg width={this.props.width} height={this.props.height}>
                {this.state.data.map((d, i) => {
                    return (<SvgHorizLine key={i} x1='0' y1={i * distBetweenLines} x2={d[1]} y2={i * distBetweenLines} />)
                })}
            </svg>
        );
    }
}

ReactDOM.render(<BarGraph width='1000' height='1000' />, document.querySelector('#app5Container'));