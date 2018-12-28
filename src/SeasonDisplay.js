import React from 'react'

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = props => {
    
    const season = getSeason(props.lat, props.month);
    const seasonOption = season === 'Summer' ? 'Lets hit the beach' : 'It cold outside';
    const icon = season === 'Winter' ? 'snowflake outline' : 'sun outline'; 

    return (
        <div>
            <i className={`${icon} icon`}></i>
            <h1>{seasonOption}</h1>
            <i className={`${icon} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;