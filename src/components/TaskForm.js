import React, { Component } from 'react';

export default class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            descripcion: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="nombre"
                    type="text" 
                    placeholder="Nombre de la tarea"
                    value={this.state.nombre}
                    onChange={this.handleChange}
                ></input>
                <br></br>
                <textarea
                    name="descripcion"
                    placeholder="Descripcion de la tarea"
                    value={this.state.descripcion}
                    onChange={this.handleChange}
                ></textarea>
                <br></br>
                <input type="submit" value="Crear tarea"></input>
            </form>
        );
    }

}