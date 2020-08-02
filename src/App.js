import React from 'react';
import PreOrder from './PreOrder.svg';
import Screenshot from './AppScreenshot.png'
import './App.css';

function App() {
  return (
    <div className="mainContainer">
      <h1 className="title">Quitic</h1>
      <h2 className="subtitle">Embrace Sobriety.</h2>
      <h3 className="emojiLine">
        <span role="img" aria-label="No Emoji">🚫</span>
        <span role="img" aria-label="Beer Emoji">🍺</span>
      </h3>
      <img src={Screenshot} id="screenshot" />
      <br />
      <img src={PreOrder} id="preorder" />
      <br />
      <p id="createdBy">Created with <span role="img" aria-label="A Heart Emoji, i.e. 'Love'">❤</span> and non-alcoholic <span role="img" aria-label="A Beer Emoji">🍺</span> by <a class="link" href="https://www.twitter.com/jakenherman">@jakenherman</a></p>
      <p id="coffee"><a class="link" href="https://paypal.me/jaken?locale.x=en_US">Buy me a <span role="img" aria-label="Coffee Emoji">☕️</span></a></p>
    </div>
  );
}

export default App;
