import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPokemonIndex: 0,
      pokemonsByType: [...pokemons.filter((pokemon) => pokemon.type === 'Fire')],
    }
    this.changePokemon = this.changePokemon.bind(this);
    this.filtersPokemonsByType = this.filtersPokemonsByType.bind(this);
  }

  changePokemon() {
    if(this.state.currentPokemonIndex === this.state.pokemonsByType.length - 1) {
      this.setState(() => ({
        currentPokemonIndex: 0,
      }));
    } else {
      this.setState((previousState) => ({
        currentPokemonIndex: previousState.currentPokemonIndex + 1,
      }));
    }
  }

  filtersPokemonsByType(type) {
    const pokemonsList = pokemons.filter((pokemon) => pokemon.type === type);
    this.setState(() => ({
      pokemonsByType: [...pokemonsList],
    }));
  }

  render() {
    const { pokemonsByType, currentPokemonIndex } = this.state;

    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemonsByType[currentPokemonIndex] } />
        <button type="button" onClick={this.changePokemon}>Next Pokemon</button>
        <button type="button" autoFocus onClick={() => this.filtersPokemonsByType('Fire')}>Fire</button>
        <button type="button" onClick={() => this.filtersPokemonsByType('Psychic')}>Psychic</button>
      </div>
    );
  }
}

export default Pokedex;