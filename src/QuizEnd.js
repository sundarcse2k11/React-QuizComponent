import React from "react";

function QuizEnd(props)
{
    return(
        <div>
            <h3>Thanks for playing</h3>
            <a href="" onClick={props.resetHandler}>Reset</a>
        </div>
    )
}
export default QuizEnd;