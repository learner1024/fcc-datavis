import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//import './styles/globe-styles.scss';
import MeteoriteGlobeComponent from './components/meteorite-globe-component.jsx';

class MeteoriteGlobeApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
        this.retrieveGlobeData();
    }
    retrieveGlobeData(){
        //fetch('http://enjalot.github.io/wwsd/data/world/world-110m.geojson')
        fetch('data/meteorite-data.json')
            .then(response => response.json())
            .then(jsonData => this.setState({data : jsonData}))
            .catch(err => console.log(err))
    }
    render(){
        return (
            <div>
                <h1>WIP - Meteorite landings across globe</h1>
                <br />
                <MeteoriteGlobeComponent globeData={this.state.data} />
            </div>
        )
    }
}
ReactDOM.render(<MeteoriteGlobeApp  />, document.querySelector('#app9Container'))