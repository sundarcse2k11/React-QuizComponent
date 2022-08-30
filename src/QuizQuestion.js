import React from "react";

class QuizQuestion extends React.Component{
    
    render()
    {
        console.log(this.props);
        return(
            <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul style={{listStyle: "none"}}>
               <li>
                {this.props.quiz_question.answer_options[0]}
                </li>
              </ul>
            </section>
          </main>
        )
    }
}

export default QuizQuestion