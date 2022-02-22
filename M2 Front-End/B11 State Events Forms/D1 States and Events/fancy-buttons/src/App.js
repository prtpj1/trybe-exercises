import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick01 = this.handleClick01.bind(this);
    this.handleClick02 = this.handleClick02.bind(this);
    this.handleClick03 = this.handleClick03.bind(this);

    this.state = {
      btnOneClick: 0,
      btnTwoClick: 0,
      btnThreeClick: 0,
    };
  }

  handleClick01() {
    this.setState((previousState, _props) => ({
      btnOneClick: previousState.btnOneClick + 1,
    }));
    console.log(this.btnColor(this.state.btnOneClick));
  }

  handleClick02() {
    this.setState((previousState, _props) => ({
      btnTwoClick: previousState.btnTwoClick + 1,
    }));
    console.log(this.btnColor(this.state.btnTwoClick));
  }

  handleClick03() {
    this.setState((previousState, _props) => ({
      btnThreeClick: previousState.btnThreeClick + 1,
    }));
    console.log(this.btnColor(this.state.btnThreeClick));
  }

  btnColor(clickNumber) {
    return clickNumber % 2 === 0 ? 'lightgreen' : 'cyan';
  }

  render() {
    const { btnOneClick, btnTwoClick, btnThreeClick } = this.state;
    return (
      
      <div className="App">
        <button
          onClick={this.handleClick01}
          style={{ backgroundColor: this.btnColor(btnOneClick) }}
        >
          {`Button One clicked ${this.state.btnOneClick} times`}
        </button>
        <br />

        <button
          onClick={this.handleClick02}
          style={{ backgroundColor: this.btnColor(btnTwoClick) }}
        >
          {`Button Two clicked ${this.state.btnTwoClick} times`}
        </button>
        <br />

        <button
          onClick={this.handleClick03}
          style={{ backgroundColor: this.btnColor(btnThreeClick) }}
        >
          {`Button Three clicked ${this.state.btnThreeClick} times`}
        </button>
        <br />
      </div>
    );
  }
}

export default App;
