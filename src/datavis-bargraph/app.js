import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import BarGraphComponent from './components/bar-graph-component.jsx';

class BarGraph extends Component{
    retrieveDataForBarGraph(){
        fetch('fcc-datavis/data/us-gdp.json')
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                this.setState({
                    data: jsonData.data.map((d) => {
                        return {'quarterStartDate' : new Date(d[0]), 'gdpValue': +d[1]};
                    }),
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    constructor(props){
        super(props);
        //fetch data
        this.state = {data: []};
        this.retrieveDataForBarGraph();
    }
    
    render(){
        return (
            <div>
                <h1>Gross Domestic Product - US</h1>
                <br />
                <BarGraphComponent barData={this.state.data} />                   
            </div>
            
        );
    }
}

ReactDOM.render(<BarGraph />, document.querySelector('#app5Container'));