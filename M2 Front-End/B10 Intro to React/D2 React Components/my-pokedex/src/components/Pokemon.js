import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: { name, type, averageWeight, image },
    } = this.props;

    return (
      <div className='pokemonCard'>
        <section>
          <h2>{name}</h2>
          <div>
            <b>Tipo: {type}</b>
            <br />
            <b>Average weight:</b>
            {averageWeight.value}/{averageWeight.measurementUnit}
            <br />
          </div>
          <img src={image} alt={name} />
        </section>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
