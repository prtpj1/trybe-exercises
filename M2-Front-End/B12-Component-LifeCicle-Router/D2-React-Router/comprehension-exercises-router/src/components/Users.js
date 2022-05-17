import React, { Component } from 'react';

class Users extends Component {
  render() {
    const {
      greetingsMessage = 'Hi, there ',
      match: {
        params: { id },
      },
    } = this.props;

    return (
      <div>
        <h2>Users</h2>
        <p> {`${greetingsMessage} user ${id}`}, my awesome User component </p>
      </div>
    );
  }
}

export default Users;
