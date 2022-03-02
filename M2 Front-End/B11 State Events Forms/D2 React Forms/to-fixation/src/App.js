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
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, schooling, lastJob, human } = this.state;

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
      </div>
    );
  }
}

export default Form;
