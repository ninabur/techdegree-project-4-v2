/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

/***
 * Data Container for Quotes - Feminism rules
 ***/
const quotes = [
  {
    quote:
      "Feminism isn't about making women stronger. Women are already strong, it's about changing the way the world perceives that strength.",
    source: "G.D. Anderson",
  },
  {
    quote:
      "They'll tell you you're too loud, that you need to wait your turn and ask the right people for permission. Do it anyway.",
    source: "Alexandria Ocasio Cortez",
    citation: "Twitter",
    year: "2018",
  },
  {
    quote:
      "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
    source: "Madeleine Albright",
    citation: "Huffpost",
    year: "2017",
  },
  {
    quote:
      "In the future, there will be no female leaders. There will just be leaders.",
    source: "Sheryl Sandberg",
    citation: "Time",
    year: "2013",
  },
  {
    quote:
      "You deserve to be here. You deserve to exist. You deserve to take up space in this world of men.",
    source: "MacKenzi Lee",
  },
];

/***
 * Function to call random Quote
 ***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * 5);
  let randomQuote = quotes[randomNumber]; /* .quote */
  return randomQuote;
}

/***
 * Function to print the random Quote with its properties above in HTML
 ***/

function printQuote() {
  let callRandomQuote = getRandomQuote();
  let html = `
    <p class="quote"> ${callRandomQuote.quote} </p>
      <p class="source"> ${callRandomQuote.source} `;

  if (callRandomQuote.citation) {
    html += `<span class="citation"> ${callRandomQuote.citation} </span>`;
  }
  if (callRandomQuote.year) {
    html += `<span class="year"> ${callRandomQuote.year} </span>`;
  }
  `</p>`;
  document.getElementById("quote-box").innerHTML = html;
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
