import React from 'react';
import './App.css';

class DogImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      name: '',
      storagedNames: [],
    };
  }

  componentDidMount() {
    if (localStorage.urlDogName) {
      const parseStorage = JSON.parse(localStorage.urlDogName)
      const lastDog = parseStorage[parseStorage.length - 1].message;

      this.setState({
        storagedNames: parseStorage,
        data: { message: lastDog },
      });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const state = nextState.data.message.includes('terrier') ? false : true;
    return state;
  }

  componentDidUpdate(_prevProps, prevState) {
    const {
      data: { message }, 
      data,
    } = this.state;

    if (prevState.data !== data) {
      const breed = message.split('/')[4];
      // localStorage.setItem('url', message);
      alert(breed);
    }
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          data: result,
        }),
      );
  };

  saveNames = () => {
    const {
      data: { message },
      name,
      storagedNames,
    } = this.state;
    const dogData = {message, name};
    const newData = [...storagedNames, dogData];
    this.setState({
      storagedNames: newData,
    });
    this.setState({ name:'' })
    localStorage.setItem('urlDogName', JSON.stringify(newData));
  };
  render() {
    const { data, name } = this.state;
    if (!data) return 'Loading...';
    return (
      <div>
        <p>Dogs Picture</p>
        <div>
          <img src={data.message} alt="DogPicture" />
        </div>
        <div>
          <input
          onChange={({target}) => this.setState({
            name: target.value
          })}
          placeholder='Type a name for this dog'
          type='text'
          value={name}
          />
        </div>
        <button onClick={this.fetchDog}>- New Dog -</button>
        <button onClick={this.saveNames}>Save name</button>
      </div>
    );
  }
}

export default DogImage;
