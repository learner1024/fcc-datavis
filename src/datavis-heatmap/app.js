import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import HeatmapComponent from './components/heat-map-component.jsx';
import './styles/heatmap-styles.scss';

class Heatmap extends Component{
    constructor(props){
        super(props);
        this.state = {data: []};
        this.retrieveDataForHeatmap();
    }
    retrieveDataForHeatmap(){
        fetch('data/global-temperature.json')
            .then(response => response.json())
            .then(jsonData => {
                jsonData.monthlyVariance.forEach(d => {
                    d.temp = jsonData.baseTemperature + d.variance;
                    d.date = new Date(d.year, 1, 1);
                });
                return jsonData.monthlyVariance;
            })
            .then(formattedData => this.setState({
                data : formattedData,
            }))
            .catch(err => console.log(err));
    }
    render(){
        return(
            <div>
                <h1>Heatmap</h1>
                <br />
                <HeatmapComponent heatmapData={this.state.data} />                   
            </div>
        );
    }
}

ReactDOM.render(<Heatmap />, document.querySelector('#app7Container'));