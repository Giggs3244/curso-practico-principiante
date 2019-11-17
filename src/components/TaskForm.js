import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            descripcion: '',
            done: false,
            id: 0
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const tarea = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            done: this.state.done,
            id: this.state.id
        };
        this.props.addTarea(tarea);
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

TaskForm.propTypes = {
    addTarea: PropTypes.func.isRequired
};