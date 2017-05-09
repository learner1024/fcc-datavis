import React, {Component} from 'react/dist/react.min.js';

class CamperLeaderboard extends Component{
    refreshData(){
        let topRecent = [];
        let topAllTime = [];

        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then((response) => {
            return response.json()
        }).then((json) => {
            console.log('recent : parsed json', json)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });

        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then((response) => {
            return response.json()
        }).then((json) => {
            console.log('alltime parsed json', json)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
    }
    constructor(props){
        super(props);

        this.refreshData();
    }

    render(){
        return (
            <h1>FreeCodeCamp : Camper Leaderboard</h1>
        );
    }
}

export default CamperLeaderboard;