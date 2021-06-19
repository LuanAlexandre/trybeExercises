import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPokemonIndex: 0,
    }
    this.changePokemon = this.changePokemon.bind(this);
  }

  changePokemon() {
    if(this.state.currentPokemonIndex === this.props.pokemons.length - 1) {
      this.setState(() => ({
        currentPokemonIndex: 0,
      }));
    } else {
      this.setState((previousState) => ({
        currentPokemonIndex: previousState.currentPokemonIndex + 1,
      }));
    }
  }

  render() {
    const { pokemons } = this.props;
    const { currentPokemonIndex } = this.state;
    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemons[currentPokemonIndex] } />
        <button type="button" onClick={this.changePokemon}>Next Pokemon</button>
      </div>
    );
  }
}

export default Pokedex;