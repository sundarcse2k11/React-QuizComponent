import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends React.Component{
    
    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer)
        {
            this.props.showNextQuestionHandler()
        }
    }
    render()
    {
        //console.log(this.props);
        return(
            <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul style={{listStyle: "none"}}>
                {this.props.quiz_question.answer_options.map((answers,index)=> 
                    <QuizQuestionButton button_text={answers}  key={index} clickHandler={this.handleClick.bind(this)}/> 
                 )} 
              </ul>
            </section>
          </main>
        )
    }
}

export default QuizQuestion