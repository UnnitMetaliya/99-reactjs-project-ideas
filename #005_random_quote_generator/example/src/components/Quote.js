import React from 'react'

import { useState, useEffect } from 'react'
import Spinner from './Spinner';

export default function Quote(props) {
  const [quotes, setQuotes] = useState("Displaying Quotes...");
  
//Logic to fetch API and show data
  const changeQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNumber = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNumber]);
    });
  };



  useEffect(() => {
    <Spinner/>
    changeQuote();
  }, []);

  function callTwo(){
    changeQuote();
    props.toggleColor();
}


//Logic to copy text
let text = quotes.text + " - " + quotes.author;
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Content copied to clipboard');
    } catch (err) {
      alert('Failed to Copy' + err);
    }
  }

  return (
    <div id='quote-box' className="card text-center w-50 position-absolute top-50 start-50 translate-middle">
  <div className="card-header fw-semibold">
    The "Quote" Machine
  </div>
  <div className="card-body">
    <h4 id='text' className="card-text" value={quotes.text}>"{quotes.text}"</h4>
    <h6 id='author' className="card-text">- {quotes.author} </h6>
    <div className = 'mt-4'>
    <button className={`btn btn-${props.mode.slice(3)} mx-4`} onClick={callTwo}>Change Quote</button>
    <button className={`btn btn-${props.mode.slice(3)} mt-sm-0 mt-4`} onClick={copyText}>CopyText</button>
    </div>
  </div>
  <div className="card-footer text-muted">
  <a className="btn" href='https://tumblr.com/' target="_blank" rel="noreferrer"><img
            src={require("../tumblr.png")}
            alt="Logo"
            width="34"
            height="34"
            className="d-inline-block align-text-top"
          /> </a>
  <a className="btn" href='https://twitter.com/intent/tweet/' id="tweet-quote" target="_blank" rel="noreferrer"><img
            src={require("../twitter.png")}
            alt="Logo"
            width="34"
            height="34"
            className="d-inline-block align-text-top"
          /> </a>
  </div>
  <h5>by Om Patel</h5>
</div>
  )
}
