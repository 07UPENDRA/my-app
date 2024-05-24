import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const[text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearTextClick = () => {
        // console.log("handle on change");
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("handle on change");
        let newText = event.target.value;
        setText(newText);
    }
    const wordCount = text.length === 0 ? 0 : text.split(" ").length;
    const characterCount = text.replace(/\s+/g, '').length;
    const minutesToRead = (0.008 * wordCount) < 0.001 ? '0' : (0.008 * wordCount).toFixed(3);

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows={5} value={text} onChange={handleOnChange}> </textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-1" onClick={handleClearTextClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
            </div>
        </div>
        <div className="container">
            <h1>Your text summary</h1>
            <p>{wordCount} words and {characterCount} characters</p>
            <p>{minutesToRead} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'set Form title here'
}
