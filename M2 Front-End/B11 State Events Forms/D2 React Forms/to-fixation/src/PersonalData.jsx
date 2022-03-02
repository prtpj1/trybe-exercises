import React from 'react';

class PersonalData extends React.Component {
  render() {
    const { inptName, inptEmail, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Dados Pessoais:</legend>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          type="text"
          value={inptName}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          type="email"
          value={inptEmail}
        />
      </fieldset>
    );
  }
}
export default PersonalData;