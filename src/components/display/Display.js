import React from 'react'

function Display(props) {
    let category = "loading";
    return (
    
    <div>
        <div className="userScore"><strong>Users Score: </strong></div> {props.score} <br />
        <div className="question"><strong>Question:</strong></div> {props.question} <br />
        <div className="value"><strong>Value:</strong></div> {props.value} <br />
        <div className="category"><strong>Category:</strong></div> {category}

        <form onSubmit={props.handleSubmit}>

        
        <div>
            <label htmlFor="answer" > <strong>Answer:</strong></label>

            <input type="text"
                name="answer"
                value={props.answer}
                onChange={props.handleChange}

            />

            <button>Submit Answer</button>





        </div>

        </form >
    </div>
    )
}

export default Display