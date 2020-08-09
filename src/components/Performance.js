import React, {useEffect, useState} from 'react'
import Icon from '@material-ui/core/Icon';
import "../styles/Performance.css"
function Performance({displayQuestions}) {
    return (
        <div  className="Performance_Wrapper">
            <div className="PerformanceHeader row">
                <div className="column">
                    Questions
                </div>
                <div className="column">
                    Answers
                </div>
            </div>
            {
                displayQuestions.map(
                    (item, index)=>(
                        <div className="row" key={index}>
                            <div className="column">
                                {item.questionNo}
                            </div>
                            <div className="column">
                                <span style={{display: "inline-flex", justifyContent: "center", alignItems: "center"}}>
                                    {
                                        item.correct
                                        ?
                                        <>
                                            <span style={{color: "#28a745"}}>
                                                {item.answer}
                                            </span>
                                            <Icon style={{color: "#28a745", borderRadius: "50%", "backgroundColor": "rgba(40,167,69, 0.3)", fontSize: "1rem", marginLeft: "1rem"}}>
                                                done
                                            </Icon>
                                        </>
                                        :
                                        <>
                                            <span style={{color: "#dc3545"}}>
                                                {item.answer}
                                            </span>
                                            <Icon style={{color: "#dc3545", borderRadius: "50%", "backgroundColor": "rgba(220,53,69, 0.3)", fontSize: "1rem", marginLeft: "1rem"}}>
                                                close
                                            </Icon>
                                        </>
                                    }
                                </span>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Performance
