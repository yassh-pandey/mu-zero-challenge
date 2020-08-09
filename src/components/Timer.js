import React from 'react'
import Icon from '@material-ui/core/Icon';
import '../styles/Timer.css'

function Timer() {
    return (
        <div className="Timer_Wrapper">
            <Icon style={{marginRight: "1rem", marginLeft: "2rem" ,color: "rgba(255, 255, 255, 1)", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "50%"}}>
                schedule
            </Icon>
            <span style={{color: "white", fontSize: "1.2rem"}}>Time Taken</span>
            <div className="time_value" style={{fontSize: "1.2rem"}}>
                1 Hr 32 Mins
            </div>
        </div>
    )
}

export default Timer
