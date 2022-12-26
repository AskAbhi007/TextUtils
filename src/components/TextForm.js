import React, {useState} from 'react'

export default function TextForm(props) {
    const handleClearText = () => {
        setText(" ");
        props.showAlert("Text cleared","success");
    }
    
    const handleUpClick = () => {
        // console.log("Upper Case = " + Text);
        // setText("You have clicked on handleUpClick")
        setText(Text.toUpperCase());
        props.showAlert("Convert to uppercase","success");
    }
    const handleLpClick = () => {
        setText(Text.toLowerCase());
        props.showAlert("Convert to lowercase","success");
    }
    const handleCopy = () => {
        // console.log("Copy is copied");
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipbord","success");
    }
    const handleExtraSpaces = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space","success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        // setText(event.value);
        setText(event.target.value); 
    }
    // const [Text] = useState("Enter text here");
    // Text = "New Text" // Wrong way to change the state
    // setText("New Text")  // Correct way to change the state
    const [Text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.Mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.Mode==='dark'?'grey':'white', color: props.Mode==='dark'?'white':'black'}} onChange={handleOnChange} value={Text} id="myBox" rows="8"></textarea>
                <button className={`btn btn-${props.Mode==='dark'?'light':'secondary'} my-3 mx-1`} onClick={handleUpClick}>Convert To Upper Case</button>
                <button className={`btn btn-${props.Mode==='dark'?'light':'secondary'} my-3 mx-1`} onClick={handleLpClick}>Convert To Lower Case</button>
                <button className={`btn btn-${props.Mode==='dark'?'light':'secondary'} my-3 mx-1`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-${props.Mode==='dark'?'light':'secondary'} my-3 mx-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className={`btn btn-${props.Mode==='dark'?'light':'secondary'} my-3 mx-1`} onClick={handleClearText}>Clear Text</button>
            </div>
        </div>

        <div className="container my-3" style={{color: props.Mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{Text.split(" ").length} Words and {Text.length} Characters</p>
            <p>{0.008 * Text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            {/* <p>{Text}</p> */}
            <p>{Text.length>0?Text:"Enter something in the textbox ablove to preview it here"}</p>
        </div>
        </>
    )
}