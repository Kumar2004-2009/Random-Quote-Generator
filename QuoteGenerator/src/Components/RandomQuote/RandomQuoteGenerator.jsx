import React, { useState } from 'react'
import './RandomQuoteGenerator.css'
import twitter_icon from '../Assets/twitter.png'
import refresh from '../Assets/refresh.png'
import copy from '../Assets/copy.png'

function RandomQuoteGenerator() {

    let quotes=[];
    async function loadQuotes() {
      const response = await fetch("https://type.fit/api/quotes");
      quotes = await response.json();
    }

    const random = () =>{
      const select = quotes[Math.floor(Math.random()*quotes.length)];
      setQuote(select);
    }

    const twitter = ()=>{
      window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    }

    const [quote,setQuote]=useState({
        text:"Difficulties increase the nearer we get to the goal",
        author:"Johann Wolfgang von Geothe",
    });

    const copyText= ()=>{
      window.navigator.clipboard.writeText(quote.text);
    }

    loadQuotes();
  return (
    <>
    <h1>Random Quote Generator</h1>
    <div className='container'>
      <div className='quote'>{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">- {quote.author.split(',')[0]}</div>
            <div className="icons">
                <img src={copy} onClick={()=>{copyText()}} alt="" />
                <img src={refresh} onClick={()=>{random()}} alt="" />
                <img src={twitter_icon} onClick={()=>{twitter()}} alt="" />
            </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default RandomQuoteGenerator
