import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      answerData:{
          answer:""

      }
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    const answerData = {...this.state.answer};
    answerData[event.target.answer] = event.target.value;

    this.setState({ answerData });
}

handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
        submitted: true
    });
}


  //display the results on the screen
  render() {
    let category= "loading";

    if(this.state.data.category){
        category = this.state.data.category.title

    }

    return (
        
      <div>
        <strong>Users Score: </strong> {this.state.score} <br/>
        <strong>Question:</strong> {this.state.data.question} <br/>
        <strong>Value:</strong> {this.state.data.value} <br/>
        <strong>Category:</strong> {category}

        <form>
            <div>
                <label htmlFor="answer" > <strong>Answer:</strong></label>

                <input type="text"
                name="answer"
                value={this.state.answer}
                
                
                />

                <button>Submit Answer</button>



            </div>

        </form>
      </div>
    );
  }
}
export default Jeopardy;