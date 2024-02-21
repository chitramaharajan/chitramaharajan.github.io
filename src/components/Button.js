import React from "react";



function MyButton(props){
    return (
        <button2 
            onClick={props.ref}
            style={{backgroundColor: props.color, borderRadius: props.radius}}
            >
            {props.name}
        </button2>
    )
}
export default MyButton;