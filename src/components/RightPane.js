import React, {useState, useEffect} from 'react'
import Timer from './Timer'
import Performance from './Performance'
import '../styles/RightPane.css'
import RoundButton from "./RoundButton"
import answers from '../answers'

function RightPane() {
    const [roundButtonsSelectedState, setRoundButtonsSelectedState] = useState(
        [
            {
                roundButtonId: "1",
                isSelected: true
            },
            {
                roundButtonId: "2",
                isSelected: false
            },
            {
                roundButtonId: "3",
                isSelected: false
            }
        ]
    );
    const [displayQuestions, setDisplayQuestions] = useState([]);
    useEffect(()=>{
        const selectedButton = roundButtonsSelectedState.filter(item=>item.isSelected)[0];
        if(selectedButton.roundButtonId==="1"){
            setDisplayQuestions(answers.filter(item=>true));
            console.log("here");
        }
        else if(selectedButton.roundButtonId==="2"){
            setDisplayQuestions(answers.filter(item=>item.correct))
        }
        else{
            setDisplayQuestions(answers.filter(item=>!item.correct))
        }
    },[roundButtonsSelectedState])
    return (
        <div className="RightPane_Wrapper">
            <div className="TimerContainer">
                <Timer />
            </div>
            <div className="ButtonsContainer">
                <RoundButton text="all" roundButtonId="1" roundButtonsSelectedState={roundButtonsSelectedState} 
                setRoundButtonsSelectedState={setRoundButtonsSelectedState}/>
                <RoundButton text="correct" roundButtonId="2"  roundButtonsSelectedState={roundButtonsSelectedState} 
                setRoundButtonsSelectedState={setRoundButtonsSelectedState}/>
                <RoundButton text="wrong" roundButtonId="3"  roundButtonsSelectedState={roundButtonsSelectedState} 
                setRoundButtonsSelectedState={setRoundButtonsSelectedState}/>
            </div>
            <div className="PerformanceContainer">
                <Performance displayQuestions={displayQuestions}/>
            </div>
        </div>
    )
}

export default RightPane
