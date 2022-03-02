import React from 'react';
import { FaCheck, FaArrowAltCircleLeft } from 'react-icons/fa';

class OtherData extends React.Component {
  render() {
    const { inptSchooling, inptLastJob, inptHuman, handleChange } = this.props;

    return (
      <fieldset>
        
        <legend>Dados Profissionais:</legend>
        <label htmlFor="schooling">
          Grau de escolaridade:
          <select
            defaultValue=""
            id="schooling"
            name="schooling"
            onChange={handleChange}
            value={inptSchooling}
          >
            <option value="">Selecione</option>
            <option value="School">2º Grau Completo</option>
            <option value="college">3º Grau Completo</option>
          </select>
        </label>
        <br />

        <label htmlFor="lastJob">Último emprego:</label>
        <br />
        <textarea
          cols="35"
          id="lastJob"
          name="lastJob"
          onChange={handleChange}
          placeholder="Preencha todos os campos"
          rows="10"
          value={inptLastJob}
        />
        {!inptLastJob ? <FaArrowAltCircleLeft /> : <FaCheck />}
        <br />
        <input
          id="human"
          name="human"
          onChange={handleChange}
          type="checkbox"
          value={inptHuman}
        />
        <label htmlFor="human">Você é humano?</label> <FaArrowAltCircleLeft />
        <br />

        <input type="file" />
      </fieldset>
    );
  }
}
export default OtherData;
