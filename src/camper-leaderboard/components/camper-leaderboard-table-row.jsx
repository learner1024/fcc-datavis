import React from 'react';
const CamperLeaderboardTableRow = ({leader}) => {
    return(
        <tr>
            <td>{leader.indx}</td>
            <td><img className='rounded' src={leader.imgUrl} />{leader.userName}</td>
            <td>{leader.allTimePoints}</td>
            <td>{leader.recentPoints}</td>
            <td>{leader.lastUpdate}</td>
        </tr>
    )
}
export default CamperLeaderboardTableRow;