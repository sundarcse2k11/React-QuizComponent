import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion'

let quizData = require('./quiz_data.json');

class Quiz extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            quiz_position: 1
        }
    }

    render(){
        console.log(quizData.quiz_questions);
        return(
            <div>
               <div className='QuizQuestion'>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />
               </div>
            </div>
        )
    }
}


export default Quiz