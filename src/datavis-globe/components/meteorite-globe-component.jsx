import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
class MeteoriteGlobeComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div className='globe-tooltip'></div><svg></svg>
            </div>
        )
    }
    componentDidUpdate(){
        let geoJson = this.props.globeData;
        var width = 960;
        var height = 500;
        
        var svg = d3.select(ReactDOM.findDOMNode(this)).select("svg")
        svg
            .attr('width', width)
            .attr('height', height)
        
        var projection = d3.geoMercator()
        //.scale(width / 2 / Math.PI)
        //.scale(100)
        //.translate([width / 2, height / 2])

        var path = d3.geoPath()
        .projection(projection);
        
        svg.append("path")
            .attr("d", path(geoJson))
    }
}

export default MeteoriteGlobeComponent;