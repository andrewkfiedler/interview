import React, { Component } from 'react';
//import logo from './logo.svg';
 

class App extends Component {
  render() {
    return (
      <div className="p-2">
        <header className="App-header">
          <h2>Welcome to the interview app!</h2>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

        <ol className="p-2">
          <li>Fetch Data from a public API <a href="https://github.com/toddmotto/public-apis">Samples</a></li>
          <li>Display data from API onto your page (Table, List, etc.)</li>
          <li>Apply a styling solution of your choice to make your page look different (CSS, SASS, CSS-in-JS)</li> 
        </ol>   
       
        </header>
      </div>
    );
  }
}

export default App;
