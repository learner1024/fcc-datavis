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
        
    }
}

export default FDGComponent;