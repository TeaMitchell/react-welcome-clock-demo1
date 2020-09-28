import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import Display from "../../components/display/Display"

class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            answerData: {
                answer: ""

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
        const answerData = { ...this.state.answerData };
        answerData[event.target.name] = event.target.value;

        this.setState({ answerData });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        if (this.state.answerData.answer === this.state.data.answer) {
            console.log("hi")
            this.setState(prevState => {
                return {
                    score: prevState.score + prevState.data.value
                }
            })

        }else{
            this.setState(prevState => {
                return {
                    score: prevState.score - prevState.data.value
                }
            })
        }

        this.getNewQuestion()
    }

    handelCorrect = (event) => {
        const correct = { ...this.data.answer };
        correct[event.target.answer] = event.target.answer
    }


    //display the results on the screen
    render() {
       


        // if (this.state.data.category) {
        //     category = this.state.data.category.title

        // }

        return (
            <Display />
            
        );
    }
}
export default Jeopardy;