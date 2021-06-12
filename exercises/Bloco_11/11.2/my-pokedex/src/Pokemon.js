import React from 'react';

class Pokemon extends React.Component {  
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className='pokemon' >
        <div className='pokemon-specs' >
          <span className='pokemon-name' >{ name }</span><br /><br />
          <span className='pokemon-type' >{ type }</span><br /><br />
          <span className='pokemon-weight' >Average weight: { averageWeight.value } { averageWeight.measurementUnit }</span>
        </div>
        <div className='div-pokemon-image' >
          <img src={ image } alt='pokemon' />
        </div>
      </div>
    );
  }
}

export default Pokemon;
