// src/QuoteGenerator.js
import React, { useState } from "react";
import quotes from "./quotes";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-generator">
      <h1>Random Quote Generator</h1>
      <div className="quote">
        <p>"{quote.text}"</p>
        <p>- {quote.author}</p>
      </div>
      <button onClick={generateRandomQuote}>Generate Quote</button>
    </div>
  );
};

export default QuoteGenerator;
