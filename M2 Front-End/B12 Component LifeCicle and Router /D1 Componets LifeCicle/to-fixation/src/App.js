import React from 'react';
import './App.css';
import Loading from './components/Loading';
import PersonCard from './components/PersonCard';

class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      person: [],
    };
  }

async componentDidMount() {
    const url = 'https://api.randomuser.me/';

    const response = await fetch(url);
    let data = await response.json();
    this.setState({
      person: data.results,
      loading: false,
    });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;

    if (nextState.person[0].dob.age > AGE) {
      return false;
    }
    return true;
  }

  getUserElements(user) {
    return {
      name:`${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image:user.picture.thumbnail,
    }
  }

  render() {
    const { person, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div>
        {person.map((currentPerson, index) => (
          <PersonCard 
          key={ index } 
          person={ this.getUserElements(currentPerson)} />
        ))}
      </div>
    )
  }
}

export default PersonalDetails;

// o shoudComponentUptade irá verificar se a pessoa renderizada pela API tem mais de 50 anos
  // e com isso, irá autorizar se o componente atualiza ou não. Caso não atualize,
  // uma mensagem de "carregando..." será exibida na tela. Caso ocorra essa situação, dê
  // um console.log no nextState e verifique a idade da pessoa que é trazida pela API.
  