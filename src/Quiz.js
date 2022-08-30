import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json');

class Quiz extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            quiz_position: 1
        }
    }
    
    showNextQuestion(){

        this.setState((state) => {
            return {quiz_position : state.quiz_position +1}
        });             
    }

    render(){
        const isQuizEnd= ((quizData.quiz_questions.length) === (this.state.quiz_position-1)) ? true : false;
        //console.log(quizData.quiz_questions.length);
        //console.log(this.state.quiz_position-1);
        console.log(quizData.quiz_questions);
        return(
            <div>
                {isQuizEnd ? <QuizEnd/> : 
               <div className='QuizQuestion'>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />
               </div>
               }
            </div>
        )
    }
}


export default Quiz