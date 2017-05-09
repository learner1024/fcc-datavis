import React from 'react';
import CamperLeaderboardTableRow from './camper-leaderboard-table-row.jsx';

const CamperLeaderboardTable = (props) => {
    return(
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Leader</th>
                    <th>All time brownie points</th>
                    <th>Recent brownie points</th>
                    <th>last updated</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.leaders.map((l, i) => {
                        return (<CamperLeaderboardTableRow key={l.username} leader={
                            {
                                indx: i+1,
                                imgUrl : l.img, 
                                userName: l.username, 
                                allTimePoints : l.alltime,
                                recentPoints: l.recent, 
                                lastUpdate : l.lastUpdate
                            }
                        } />)
                    })
                }
                
            </tbody>
        </table>
        
    )
}
export default CamperLeaderboardTable;