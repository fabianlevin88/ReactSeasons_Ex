import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'It cold outside',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {
    
    const season = getSeason(props.lat, props.month);
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} massive icon`}></i>
            <div className="ui sizer vertical segment">
                <div className="ui huge header">{text}</div>
            </div>
            <i className={`icon-right ${iconName} massive icon`}></i>
        </div>
    );
}

export default SeasonDisplay;