import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0)
    const [white, setWhite] = useState(0)
    const [words, setWords] = useState(0)
    const [para, setPara] = useState(0)
    const [time, setTime] = useState("0s")
    const [sentence, setSentence] = useState(0)


    const submitHandler = (e) => {
        const txt = e.target.parentElement.children[1].value;
        const upText = txt.toUpperCase();
        document.getElementsByTagName("textarea").value = setText(upText);
        props.showAlert("Converted to Uppercase!", "success")
    }
    
    const changeHandler = (e) => {
        setText(e.target.value);
        
        var word = 0, a = 0, s = 0, p = 0;
        const txt = e.target.parentElement.children[1].value;
        setCount(txt.length);
        
        for(var i = 0; i < (txt.length - 1); i++) {
            if(txt[i] === " " || txt[i] === "-")
            a++;
            else if(txt[i + 1] === "." || txt[i + 1] === "?" || txt[i + 1] === "!")
            s++;
            else {
                if((txt.length === 0) || (a === txt.length))
                p = 0;
                else if(((txt[i] === ".") || (txt[i] === " ")) && (txt[i + 1] === "\n"))
                p++;
            }
        }
        if(txt.charAt(txt.length - 1) === " ")
        a++;
        setWhite(a);
        setSentence(s);
        setPara((txt.length === 0) || (a === txt.length) ? 0 : (p + 1));

        if(txt.length === 0) {
            word = 0;
            p = 0;
        }
        else if(a === txt.length) {
            word = 0;
            p = 0;
        }
        else
        word = a + 1;
        setWords(word);

        var t = Math.ceil(word * 60 / 250);
        if (t < 60)
        setTime(t + "s");
        else {
            const tm = Math.floor(t / 60);
            const ts = Math.ceil(t % 60);
            setTime(tm + "m " + ts + "s");
        }
    }

  return (
    <div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: props.mode === "light" ? "black" : "white", fontSize:"30px"}}>Enter your text below!</label>

            <textarea className="form-control"
            style={{color: props.mode === "light" ? "#222" : "white", backgroundColor: props.mode === "light" ? "white" : "#222"}} id="exampleFormControlTextarea1" rows="8" placeholder="Your text goes here!" value={text} onChange={changeHandler}></textarea>

            <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={submitHandler}>Convert to UPPERCASE</button>

            {/* <button className="btn btn-primary mx-2" onClick={countHandler}>Count the Characters</button> */}

            <div style={{color: props.mode === "light" ? "#222" : "white"}}>

                <h3 className='my-2'>Summary:</h3>

                <p className='my-1'>Number of characters <i>(Including spaces)</i> - <b><i>{count}</i></b></p>

                <p className='my-1'>Number of characters <i>(Excluding spaces)</i> - <b><i>{count - white}</i></b></p>

                <p className='my-1'>Number of white spaces - <b><i>{white}</i></b></p>

                <p className='my-1'>Number of words - <b><i>{words}</i></b></p>

                <p className='my-1'>Number of sentences - <b><i>{sentence}</i></b></p>

                <p className='my-1'>Number of paragraphs - <b><i>{para}</i></b></p>

                <p><b><i>{time}</i></b> read <i>(with an average reading speed of 250 words per minute!)</i></p>
                
                <p className='my-5'><h3>Preview:</h3>{text}</p>

            </div>
        </div>
    </div>
  )
}
