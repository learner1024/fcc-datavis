import React, {Component} from 'react';
import CamperLeaderboardTable from './camper-leaderboard-table.jsx';

class CamperLeaderboard extends Component{
    refreshData(){        

        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then((response) => {
            return response.json();
        }).then((json) => {
            this.setState({
                topRecent: json
            })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });

        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then((response) => {
            return response.json();
        }).then((json) => {
            this.setState({
                topAllTime: json
            })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
    }
    constructor(props){
        super(props);
        this.state = {
            topRecent: [],
            topAllTime: []
        };
        this.refreshData();
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
                        <CamperLeaderboardTable leaders={this.state.topRecent}  />
                    </div>
                </div>
            </div>
        );
    }
}

export default CamperLeaderboard;