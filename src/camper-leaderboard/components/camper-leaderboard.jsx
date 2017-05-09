import React, {Component} from 'react';
import CamperLeaderboardTable from './camper-leaderboard-table.jsx';

class CamperLeaderboard extends Component{
    retrieveAlltimeData(){
        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then((response) => {
            return response.json();
        }).then((json) => {
            this.setState({
                data: json
            })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
    }
    retrieveRecentData(){
        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then((response) => {
            return response.json();
        }).then((json) => {
            this.setState({
                data: json
            })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
    }
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        this.retrieveRecentData();
    }

    onTopRecentCommandHandler(){
        this.retrieveRecentData();
    }

    onTopAllTimeCommandHandler(){
        this.retrieveAlltimeData();
    }

    render(){
        return (
            <div>
                <div className='row'>
                    <div className='col text-center'>
                        <h1>FreeCodeCamp - Camper Leaderboard</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <CamperLeaderboardTable 
                            onTopRecentCommand={this.onTopRecentCommandHandler.bind(this)} 
                            onTopAllTimeCommand={this.onTopAllTimeCommandHandler.bind(this)} 
                            leaders={this.state.data}  />
                    </div>
                </div>
            </div>
        );
    }
}

export default CamperLeaderboard;