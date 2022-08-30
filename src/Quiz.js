import React, { Component } from 'react';

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
               {quizData.quiz_questions.map((quiz_questions) => 
                <div key={quiz_questions['id']}>
                    {quiz_questions['instruction_text']}
                </div>    
                )};             
                </div>
            </div>
        )
    }
}


export default Quiz