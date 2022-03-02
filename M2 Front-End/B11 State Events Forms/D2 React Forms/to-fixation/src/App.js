import './App.css';
import React from 'react';
import PersonalData from './PersonalData';
import OtherData from './OtherData';


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      schooling: '',
      lastJob: '',
      human: false,
      formularioComErros: true,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.handleError();
      },
    );
  };

  handleError = () => {
    const { name, email, schooling, lastJob, human } = this.state;

    const errorCases = [
      !name,
      !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      !schooling,
      !lastJob,
      !human,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  };

  render() {
    const { name, email, schooling, lastJob, human, formularioComErros } =
      this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
          </h1>
        </header>
        <form className="form">
          <PersonalData
            inptName={name}
            inptEmail={email}
            handleChange={this.handleChange}
          />
          <OtherData
            inptSchooling={schooling}
            inptLastJob={lastJob}
            inptHuman={human}
            handleChange={this.handleChange}
          />
        </form>
        {formularioComErros ? (
          <span style={{ color: 'red' }}>Preencha todos os campos</span>
        ) : (
          <span style={{ color: 'green' }}>
            Todos os campos foram preenchidos!
          </span>
        )}
      </div>
    );
  }
}

export default Form;
