import React from 'react';
import './App.css';
import TaskList from './TaskList';

const tasks = ['Prepare Lunch', 'Study', 'Do Exercises', 'Take care of pets'];

class App extends React.Component {
  render() {
    return (
      <ol>
        {tasks.map(tasks => TaskList(tasks))}
      </ol>
    );
  };
};

export default App;
