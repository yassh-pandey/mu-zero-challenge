import React, {useState, useRef} from 'react'
import '../styles/Question.css'
import { Icon } from '@material-ui/core';
function Question({setOptionSelected}) {
    const correctAnswerIndex = 3;
    const optionsRef = useRef([]);
    const optionClicked = (e)=>{
        optionsRef.current.forEach(optionRef=>{
            optionRef.setAttribute("style", "");
            optionRef.childNodes[0].setAttribute("style", "");
            optionRef.childNodes[1].setAttribute("style", "");
        })
        
        if(e.currentTarget.id === correctAnswerIndex.toString()){
            optionsRef.current[e.currentTarget.id].style.backgroundColor = "rgba(40, 167, 69, 0.3)";
            optionsRef.current[e.currentTarget.id].style.color = "rgba(40, 167, 69, 1)";
            optionsRef.current[e.currentTarget.id].style.fontWeight = "bold";
        }
        else{
            optionsRef.current[e.currentTarget.id].style.backgroundColor = "rgba(220, 53, 69, 0.3)";
            optionsRef.current[e.currentTarget.id].style.color = "rgba(220, 53, 69, 1)";
            optionsRef.current[e.currentTarget.id].style.fontWeight = "bold";
        }
        optionsRef.current[e.currentTarget.id].childNodes[0].style.transform = "translate3d(0.5rem, 0px, 0px)";
        optionsRef.current[e.currentTarget.id].childNodes[1].style.transform = "translate3d(1rem, 0px, 0px)";
        setOptionSelected(true);
    }
    const options = [
        "A. x(x + b) + a(x + b)",
        "B. (x + a) (x + b)",
        "C. (x + a) (x + b)",
        "D. x2 + (a + b)x + ab"
    ];
    return (
        <div className="Question_Wrapper">
            <p className="QuestionStatement">
                1. Let us consider (x + a) (x + b) (x + a) (x + b = (x + a) (x + b)
            </p>
            <div className="Opations_Wrapper">
                {
                    options.map((option, index)=>{
                        return (
                            index===correctAnswerIndex
                            ?
                            (
                                <div className="Option" key={index} id={index} onClick={optionClicked}
                                ref={temp=>optionsRef.current[index]=temp}
                                >
                                    <span className="OptionIcon">
                                        <Icon style={{fontSize: "1.2rem", backgroundColor: "rgb(40, 167, 69)", color: "white"}}>
                                            done
                                        </Icon>
                                    </span>
                                    <span className="OptionText">
                                        {option}
                                    </span>
                                </div>
                            )
                            :
                            (
                                <div className="Option" key={index} id={index} onClick={optionClicked}
                                 ref={temp=>optionsRef.current[index]=temp}
                                >
                                    <span className="OptionIcon">
                                        <Icon style={{fontSize: "1.2rem", backgroundColor: "rgb(220, 53, 69)", color: "white"}}>
                                            close
                                        </Icon>
                                    </span>
                                    <span className="OptionText">
                                        {option}
                                    </span>
                                </div>
                            )
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Question
