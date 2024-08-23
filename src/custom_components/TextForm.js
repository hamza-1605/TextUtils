import React , {useState, useEffect} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState('');
    const [vowel, updateVowels] = useState('') ;
    const [wordsNum, updateWordsNum] = useState(0) ;

    const changingFunc = (event) => {
        // console.log('Hello change') ;
        setText(event.target.value) ;
    }
    
    const changeToUppercase = () => {
        // console.log('HELLO uppercase') ;
        let newText = text.toUpperCase();
        setText(newText) ;
        props.alert("Converted to Uppercase!", "success")
    }
    
    const changeToLowercase = () => {
        // console.log('hello lowercase') ;
        let newText = text.toLowerCase() ;
        setText(newText) ;
        props.alert("Converted to Lowercase!", "success")
    }
    
    const changeToEmpty = () => {
        // console.log('hello empty') ;
        let newText = "" ;
        setText(newText) ;
        props.alert("Text has been cleared!", "success")
    }
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.alert("Text Copied to Clipboard", "success")
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/) ;
        setText(newText.join(' ')) ;
        props.alert("Extra spaces have been removed", "success")
    }
    
    const vowelCount = () =>{
        let vowels = 0 ;
        for(let i=0 ; i<= text.length ; i++){
            if( text.charAt(i).match(/[aeiouAEIOU]/)  ){
                vowels++ ;
            }
        }
        updateVowels(' & ' + vowels + ' vowels') ;
    }

    const wordCount = () => {
        if( text.length === 0 ){
            updateWordsNum(0) ;
        }
        else{
            let num = 1 ;
            for(let i=0 ; i <= text.length ; i++){
                if( (text.charAt(i) === ' ' || text.charAt(i) === '\n') && text.charAt(i+1) !== ' '){
                    num++
                }
            }
            updateWordsNum(num) ;
        }
    }

    const divTextStyle = () => {
        if( props.mode === 'white' || props.mode === '#D75B71'){
            return { color: 'black' } ;
        }
        else{
            return { color: 'white' } ;
        }
    } 

    const btnTextStyle = () => {
        if( props.mode === 'white'){
            return { color: 'black' , backgroundColor : props.mode } ;
        }
        else{
            return { color: 'white' , backgroundColor : props.mode } ;
        }
    }

    const formStyle = () => {

        if(window.getComputedStyle(document.body).backgroundColor === 'rgb(245, 245, 220)' || window.getComputedStyle(document.body).backgroundColor === 'rgb(255, 192, 203)'){
            return {color: 'black' , backgroundColor: window.getComputedStyle(document.body).backgroundColor , border: '1px solid #b2b2b7'} 
        }
        else{
            return {color: 'white' , backgroundColor: window.getComputedStyle(document.body).backgroundColor }
        }
    }

    useEffect( () => {
        wordCount();
        vowelCount();
    }, [text])

    return (
        <>
        <div className={`container my-3 text`} style={ divTextStyle() }>
            <h1>{props.heading}</h1>
            <form name='form'>
                <div className="form-group">
                    <textarea className="form-control" onChange={changingFunc} id="textBox" rows="5" value={text} placeholder='Your text goes here' style={ formStyle() }></textarea>
                </div>
            </form>
            <button disabled={text.length===0} className="btn btn mx-2 my-2" style={ btnTextStyle() } onClick={changeToUppercase}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn mx-2 my-2" style={ btnTextStyle() } onClick={changeToLowercase}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn mx-2 my-2" style={ btnTextStyle() } onClick={changeToEmpty}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn mx-2 my-2" style={ btnTextStyle() } onClick={copyToClipboard}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn mx-2 my-2" style={ btnTextStyle() } onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className={`container my-3 text`} style={ divTextStyle() }>
            <h2>Text Summary</h2>
            <p>{wordsNum} words and {text.length} characters {vowel}</p>
            <p>{(0.008 * wordsNum).toFixed(3)} Minutes read time.</p>
            <h2 className='my-2'>Preview</h2>
            <p>{ text.length === 0 ? '#Enter some text in the above textbox to see it here#' : text}</p>
        </div>
        </>
    )
}
