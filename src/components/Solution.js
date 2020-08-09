import React from 'react'
import '../styles/Solution.css'

function Solution({optionSelected}) {
    return (
        <div className="Solution_Wrapper">
            <p>Solutions:</p>
            {
                optionSelected
                ?
                <div className="solutionText">
                    <p>General Identity</p>
                    <p>Let us consider (x + a) and (x + b)</p>
                    <p>(x + a) (x + b) = (x + a) (x + b)</p>
                    <p>= x(x + b) a(x + b)</p>
                    <p>= x 2 + bx + ax + ab</p>
                    <p>= x2 + (a + b)x + ab</p>
                    <p>Thus, (x + a) (x + b) = x2 + (a + b)x + ab</p>
                </div>
                :
                null
            }
        </div>
    )
}

export default Solution
