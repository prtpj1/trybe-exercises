import pokemons from './data';
import './App.css';
import React from 'react';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1 className='App-header'>POKEDEX</h1>
        <Pokedex pokemon={pokemons} />
      </div>
    );
  }
}

export default App;
