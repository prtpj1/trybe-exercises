import React from 'react';
import { FaCheck, FaArrowAltCircleLeft } from 'react-icons/fa';

class PersonalData extends React.Component {
  render() {
    const { inptName, inptEmail, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Dados Pessoais:</legend>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Preencha todos os campos"
            type="text"
            value={inptName}
          />
          {inptName === undefined ? <FaCheck /> : <FaArrowAltCircleLeft />}
        </label>
        <br />

        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Preencha todos os campos"
            type="email"
            value={inptEmail}
          />
          {inptEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? <FaCheck /> : <FaArrowAltCircleLeft />}
        </label>
      </fieldset>
    );
  }
}
export default PersonalData;
