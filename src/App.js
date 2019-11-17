import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import tareas from './sample/tasks.json'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tareas: tareas
    }

  }

  render () {
    return (
      <div className="App">
        <TaskForm></TaskForm>
        <Tasks tareas={this.state.tareas}></Tasks>
      </div>
    );
  }
}

export default App;
