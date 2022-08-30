import React from "react";

function QuestionOptions(props){
    console.log("Options=",props); 

    /*const optionHandler = answer => { alert(answer);
        props.questionHandler(answer);
    }*/

    return (
        <li>           
            <button onClick={(e) => props.questionHandler(props.options)}>{ props.options }</button>          
        </li>
    )
}

export default QuestionOptions;