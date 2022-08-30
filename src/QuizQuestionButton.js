import React, { Component } from 'react';

class QuizQuestionButton  extends React.Component{

    handleClick()
    {
        this.props.clickHandler(this.props.button_text);
    }
    render(){ console.log("Answe:",this.props);
        return(
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        )
    }
}

export default QuizQuestionButton;