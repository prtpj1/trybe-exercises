import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { Switch } from 'react-router-dom';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    const { greetingsMessage } = this.props;
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/strict-access">Strict Access</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            exact
            path="/users/:id"
            render={(props) => (
              <Users {...props} greetingsMessage={greetingsMessage} />
            )}
          />
          <Route
            path="/strict-access"
            render={() => (
              <StrictAccess user={{ username: 'joao', password: '1234' }} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
