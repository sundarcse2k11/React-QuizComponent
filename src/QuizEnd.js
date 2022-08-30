import React, { Component } from 'react';
import Quiz from './Quiz';

class QuizEnd extends React.Component{
    render()
    {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href=''>Reset Quiz</a>
            </div>
        )
    }
}
export default QuizEnd;