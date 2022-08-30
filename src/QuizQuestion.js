import React, { Component, useState } from "react";
import QuestionOptions from './QuestionOptions'

function QuizQuestion(props)
{
    const [isanswerValid,setIsAnswerValid] = useState('false');

    const questionHandler = correctOption => {   console.log(props);
        if(correctOption===props.questionData.answer)
        {
            console.log("Correct Answer");
            setIsAnswerValid(true);
            props.nextQuestionHandler();
        }
        else{
            console.log("Wrong Answer");
            setIsAnswerValid(false);
        } 
    }
  
    return(
        <div>
            <p>{props.questionData.instruction_text}</p>
            <ul style={{listStyle:"none"}}>
                 {props.questionData.answer_options.map((option,index) => 
                <QuestionOptions  options={option} key={index} questionHandler={questionHandler} />
                )}
            </ul>
            {!isanswerValid ? <p>Sorry, Wrong Answer</p> : ''}
        </div>
    )
}

export default QuizQuestion;