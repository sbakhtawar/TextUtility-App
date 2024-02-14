import React,{useState} from 'react'


export default function TextForm(props) {

    const [text,setText]= useState('');
    const [copiedText,setCopiedText]= useState('');
    const[palText]= useState('Enter text here.....');

    const handleUpClick = () =>{
        console.log("Uppercase was clicked " + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlertProp("Converted to uppercase","success");
    
    }
    const handleLowClick = () =>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlertProp("Converted to lowercase","success");
    
    }
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlertProp("Speech is now activated","success");
    }
    const handleClearClick = () =>{
        let newText= "";
        setText(newText);
        props.showAlertProp("Text was cleared","success");
    
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        if(text.value.length>0)
        {
            props.showAlertProp("Text was copied","success");
        }
        
    }
    const handlePaste=async()=>{
        const text= await navigator.clipboard.readText();
        console.log(text);
        setCopiedText(text);
        if(text.length>0)
        {
            props.showAlertProp("Text can be pasted anywhere","success");
        }
        
    }

    let wordsLength= text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length;
    let  charactersLength= text.trim().length;
    let minsToRead= 0.008 * wordsLength;
    let btnDisabled= text.length===0;

    let styleFromProps={
        backgroundColor: props.mode === 'light'?'white':'#13466e',
        color:props.mode === 'light'?'#042743':'white'
    }
    let styleFromPropsContainer={
        color:props.mode === 'light'?'#042743':'white'
    }
    let styleFromPropsBtn={
        color:props.mode === 'light'?'#042743':'white'
    }
    

  return (
    <>
        <div className="container" style={styleFromPropsContainer}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={styleFromProps}
                    placeholder={palText} id="myBox" rows="8">
                </textarea>   
        </div >
            <button disabled={btnDisabled} className='btn btn-primary' style={styleFromPropsBtn} onClick={handleUpClick} >Convert to Uppercase</button> 
            <button disabled={btnDisabled} className='btn btn-success mx-1 my-1' style={styleFromPropsBtn} onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={btnDisabled} className="btn btn-warning mx-1 my-1" style={styleFromPropsBtn} onClick={speak}>Speak</button>
            <button disabled={btnDisabled} className='btn btn-danger mx-1 my-1' style={styleFromPropsBtn} onClick={handleClearClick}>Clear Text</button>
            <button disabled={btnDisabled} className='btn btn-danger mx-1 my-1' style={styleFromPropsBtn} onClick={handleCopy}>Copy</button>
            <button disabled={btnDisabled} className='btn btn-danger mx-1 my-1' style={styleFromPropsBtn} onClick={handlePaste}>Paste</button>
        </div>
        <div className="container my-2" style={styleFromPropsContainer}>
                <h3>Your text summary</h3>
                <p>Words:<b>{wordsLength}</b>  </p>
                <p>Characters: <b>{charactersLength} </b></p>
                <p>Minutes to read: <b>{minsToRead}</b> </p>
                <h4>{text.length>0?"Preview":""}</h4>
                <p>{text}</p>
                <h4>{copiedText.length>0?"Copied text":""}</h4>
                <p>{copiedText.length>0? copiedText:""}</p>
        </div>
    </>
 
  )
}
