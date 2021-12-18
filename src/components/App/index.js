import React from 'react';
import Header from '../Header';
import CardsGrid from '../CardsGrid';
import './styles.css';
import Footer from '../Footer';

function App() {
  return (
      <div className="App">
          <Header />
          <CardsGrid />
          <Footer />
      </div>
  );
}

export default App;
