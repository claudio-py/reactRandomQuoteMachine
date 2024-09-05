
import quotesData from '/src/assets/quotes.js'
import './App.css'

function App() {
  
  
  
  
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  let currentQuote = '',
    currentAuthor = '';
  

  function getRandomQuote() {
    return quotesData.quotes[
      Math.floor(Math.random() * quotesData.quotes.length)
    ];
  }
  
  function getQuote() {
    let randomQuote = getRandomQuote();
  
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;
  
    document.getElementById('tweet-quote').setAttribute(
      'href',
      'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
  
    document.getElementById('tumblr-quote').setAttribute(
      'href',
      'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
        encodeURIComponent(currentAuthor) +
        '&content=' +
        encodeURIComponent(currentQuote) +
        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
    );
  
    document.querySelector('.quote-text').style.opacity = 0;
    setTimeout(() => {
      document.querySelector('.quote-text').style.opacity = 1;
      document.getElementById('text').textContent = randomQuote.quote;
    }, 500);
  
    document.querySelector('.quote-author').style.opacity = 0;
    setTimeout(() => {
      document.querySelector('.quote-author').style.opacity = 1;
      document.getElementById('author').innerHTML = randomQuote.author;
    }, 500);
  
    const color = Math.floor(Math.random() * colors.length);
    document.documentElement.style.transition = 'background-color 1s, color 1s';
    document.documentElement.style.backgroundColor = colors[color];
    document.documentElement.style.color = colors[color];
  
    document.querySelectorAll('.button').forEach(button => {
      button.style.transition = 'background-color 1s';
      button.style.backgroundColor = colors[color];
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
   
    document.getElementById('new-quote').addEventListener('click', getQuote);
  });


  return (
    <>
      
    <div id="wrapper">
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"> </i><span id="text"></span>
        </div>
        <div className="quote-author">- <span id="author"></span></div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
          >
            <i className="fa fa-tumblr"></i>
          </a>
          <button className="button" id="new-quote">New quote</button>
        </div>
      </div>
    
    </div> 
    </>
  )
}

export default App
