import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText (newText);
        props.showAleart("Converted to Uppercase", "success");
    }

    const handleLoClick = () =>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText (newText);
        props.showAleart("Converted to Lowercase", "success");
    }

    const handleClearClick = () =>{
        let newText = "";
        setText (newText);
        props.showAleart("Text Cleared", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("OnChange");
        setText(event.target.value);
        
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAleart("Copied to clipboard", "success");
    }

    const [text, setText] = useState("")  //Here text is "state varibale", setText is changed varibale
    // text = "New Text"  Wrong way to change the state
    // setText("New Text");  //Correct Way to change the state 
    return (
        <>
    <div className = "container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"
        style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick= {handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick= {handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick= {handleClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-3" onClick= {handleCopy} >Copy Text</button>
    </div>
    <div className= "container my-3" style={{color: props.mode==='dark'?'white':'black'}} > 
            <h1>Your Text summary</h1>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox above to preview it here "}</p>
    </div>
    </>
    )
} 
