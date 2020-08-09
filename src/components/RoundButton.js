import React, {useRef, useState, useEffect, memo} from 'react'

function RoundButton({text, roundButtonId, roundButtonsSelectedState, setRoundButtonsSelectedState}) {
    useEffect(()=>{
        setRoundBtnId(roundButtonId);
    }, [])
    useEffect(()=>{
        if(roundBtnId !== undefined){
            roundButtonRef.current.style.backgroundColor = "white";
            roundButtonRef.current.style.color = "black";
            if(roundButtonsSelectedState.filter((item)=>item.roundButtonId===roundBtnId)[0].isSelected===true){
                roundButtonRef.current.style.backgroundColor = "#1e88e5";
                roundButtonRef.current.style.color = "white";
            }
            else{
                return;
            }
        }
        else{
            return ;
        }
    })
    const [roundBtnId, setRoundBtnId] = useState();
    const roundButtonRef = useRef();
    const roundButtonClicked = (e)=>{
        const newState = roundButtonsSelectedState.map(item=>{
            if(item.roundButtonId===roundBtnId){
                return {...item, isSelected: true};
            }
            else{
                return {...item, isSelected: false};
            }
        });
        setRoundButtonsSelectedState(newState);
    };
    const roundButtonStyle = {
        "textAlign": "center",
        "padding": "0px 40px",
        "width": "7rem",
        "height": "30px",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "borderRadius": "15px",
        "cursor": "pointer",
        "textTransform": "uppercase",
        "fontSize": "0.8rem",
        "fontWeight": "bold",
        "boxShadow": "0px 0px 2px rgba(1,1,1, 0.5)",
        "transition": "background-color 0ms ease-in-out",
        "userSelect": "none"
    }
    return (
        <div 
        ref={roundButtonRef}
        style={roundButtonStyle} 
        onClick={roundButtonClicked}
        >
            {text}
        </div>
    )
}

export default memo(RoundButton);