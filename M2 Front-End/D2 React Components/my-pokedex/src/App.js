import pokemonsData from './data';
import './App.css';
import React from 'react';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>POKEDEX</h1>
        <Pokedex pokemons={pokemonsData} />
      </div>
    );
  }
}

export default App;
