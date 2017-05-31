import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FDGComponent from './components/fdg-component.jsx';
import './styles/fdg-styles.scss';

class ForceDirectedGraph extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: {},
        };
        this.retrieveFDGData();
    }
    retrieveFDGData(){
        fetch('data/fdg_data.json')
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                this.setState({
                    data: jsonData, 
                });
            })
            .catch((err) => console.log(err));
    }
    render(){
        return(
            <div>
                <h1>Force Directed Graph</h1>
                <br />
                <FDGComponent fdgData={this.state.data} />
            </div>
        );
    }
}

ReactDOM.render(<ForceDirectedGraph />, document.querySelector('#app8Container'));