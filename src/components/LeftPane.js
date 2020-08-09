import React, {useState} from 'react'
import '../styles/LeftPane.css'
import Header from './Header'
import NavigateQuestions from './NavigateQuestions'
import Question from './Question'
import Solution from './Solution'
function LeftPane() {
    const [optionSelected, setOptionSelected] = useState(false);
    return (
        <div className="LeftPane_Wrapper">
            <div className="HeaderContainer">
                <Header />
            </div>
            <div className="QuestionContainer">
                <Question  setOptionSelected={setOptionSelected}/>
            </div>
            <div className="SolutionContainer">
                <Solution optionSelected={optionSelected} />
            </div>
            <div className="NabigateQuestionsContainer">
                <NavigateQuestions />
            </div>
        </div>
    )
}

export default LeftPane
