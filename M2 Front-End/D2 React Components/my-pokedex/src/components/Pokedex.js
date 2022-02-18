import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokedex'>
        {this.props.map((element) => (
          <Pokemon key={this.props.id} pokemon={this.props} />
        ))}
      </div>
    );
  }
}
