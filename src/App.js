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

  addTarea = (tarea) => {
    console.log(tarea);
    tarea.id = (this.state.tareas.length + 1);
    console.log(tarea.id);
    console.log([tarea]);
    this.setState({
      tareas: this.state.tareas.concat([tarea])
    });
    console.log(this.state.tareas);
  }

  changeEstadoTarea = (id) => {
    console.log(id);
    const changedEstadoTareas = this.state.tareas.map(tarea => {
      if (tarea.id === id) { 
        tarea.done = !tarea.done
      }
      return tarea;
    });
    console.log(changedEstadoTareas);
    this.setState({
      tareas: changedEstadoTareas
    });
    console.log(this.state.tareas);
  }

  deleteTarea = (id) => {
    console.log(id);
    const filterTareas = this.state.tareas.filter(tarea => tarea.id !== id);
    console.log(filterTareas);
    this.setState({
      tareas: filterTareas
    });
    console.log(this.state.tareas);
  }

  render () {
    return (
      <div className="App">
        <TaskForm addTarea={this.addTarea}></TaskForm>
        <Tasks tareas={this.state.tareas} changeEstadoTarea={this.changeEstadoTarea} deleteTarea={this.deleteTarea}></Tasks>
      </div>
    );
  }
}

export default App;
