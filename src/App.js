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

  changeEstadoTarea = (id) => {
    console.log(id);
  }

  deleteTarea = (id) => {
    console.log(id);
  }

  render () {
    return (
      <div className="App">
        <TaskForm></TaskForm>
        <Tasks tareas={this.state.tareas} changeEstadoTarea={this.changeEstadoTarea} deleteTarea={this.deleteTarea}></Tasks>
      </div>
    );
  }
}

export default App;
