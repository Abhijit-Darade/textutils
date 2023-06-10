import React, {useState} from 'react'


function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase( ))
    }
    const handleLoClick = () => {
        setText(text.toLowerCase( ))
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className = 'container' style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            <textarea className = "form-control" value={text} onChange={handleOnChange}
            id = "myBox"
            rows = "8" style={{backgroundColor :props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}> </textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div  className = "container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : 'Enter text to preview it.'}</p>
    </div>
    </>
  )
}

export default TextForm