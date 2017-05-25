import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ScatterPlotComponent from './components/scatter-plot-component.jsx';
import './styles/scatter-plot-styles.scss';

class ScatterPlot extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
        this.retrieveDataForScatterPlot();
    }
    render(){
        return(
            <div>
                <h1>Scatter Plot - Cyclists and Doping</h1>
                <br />
                <ScatterPlotComponent scatterData={this.state.data} />
            </div>
        );
    }
    retrieveDataForScatterPlot(){
        fetch('data/cyclist-data.json')
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                jsonData.forEach(d => {
                    d.Year = new Date(`${d.Year}-1-1`);
                });
                console.log(jsonData);
                this.setState({
                    data: jsonData,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

ReactDOM.render(<ScatterPlot />, document.querySelector('#app6Container'));