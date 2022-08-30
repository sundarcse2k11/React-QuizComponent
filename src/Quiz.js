import React,{ Component, useEffect, useState } from "react";
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quiz_Data = require('./quiz_data.json');

function Quiz(props)
{
    const [quizNumber,setQuizNumber]=useState(1);
    const [isQuizEnd,setIsQuizEnd] = useState(false);

    const nextQuestionHandler = (e) => {  
       setQuizNumber(prevQuizNumber =>  prevQuizNumber + 1); 
        console.log("========================================")
        console.log(quiz_Data.quiz_questions.length);
        console.log(quizNumber);
        console.log("========================================")
        setIsQuizEnd((quiz_Data.quiz_questions.length)===(quizNumber) ? true : false);
    }
    const resetHandler = () =>
    {
        setQuizNumber({quizNumber : 1}); 
    }

    console.log(quiz_Data.quiz_questions);
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Quiz Page</h1>
            {!isQuizEnd ?
            <div className="QuizQuestion">
                <QuizQuestion questionData={quiz_Data.quiz_questions[quizNumber-1]} nextQuestionHandler={nextQuestionHandler}  />
            </div>
            : <QuizEnd resetHandler={resetHandler} />}
        </div>
    )
}
export default Quiz;
