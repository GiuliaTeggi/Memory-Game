import React from 'react';
import Header from '../Header';
import Game from '../Game';
import Footer from '../Footer';
import './styles.scss';

function App() {
  return (
      <div className="App">
          <Header />
          <Game />
          <Footer />
      </div>
  );
}

export default App;
