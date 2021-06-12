import React from 'react';
import Pokemon from './Pokemon';
import Pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokedex' >
        <header className='title-container'>
          <h1 className='title' >Pokedex</h1>
        </header>
        <main className='pokemon-container'>
          { Pokemons.map((pokemon, index) => <Pokemon pokemon={ pokemon } key={ `pokemon${index}` } /> ) }
        </main>
      </div>
    );
  }
}

export default Pokedex;
