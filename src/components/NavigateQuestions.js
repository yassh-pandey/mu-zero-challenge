import React from 'react'
import Icon from '@material-ui/core/Icon';

function NavigateQuestions() {
    const arrowStyle = {
        color: "white",
        backgroundColor: "#2b78fe",
        borderRadius: "50%",
        fontSize: "2rem",
        cursor: "pointer"
    }
    const spanStyle = {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px 1rem"
    }
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "100%"}}>
            <span style={{...spanStyle, marginLeft: "3rem"}}>
                <Icon style={arrowStyle}>
                    keyboard_arrow_left
                </Icon>
                <span style={spanStyle}>
                    Previous
                </span>
            </span>
            <div style={{}}>
                2 of 30
            </div>
            <span style={{...spanStyle, marginRight: "3rem"}}>
                <span style={spanStyle}>
                    Next
                </span>
                <Icon style={arrowStyle}>
                    keyboard_arrow_right
                </Icon>
            </span>
        </div>
    )
}

export default NavigateQuestions
