import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {

    render() {

        return (
            <div className="tarea">
                <p>Nombre de la tarea: {this.props.tarea.nombre}</p>
                <p>Descripción de la tarea: {this.props.tarea.descripcion}</p>
                <input type="checkbox" onChange={() => this.props.changeEstadoTarea(this.props.tarea.id)}></input>
                <button onClick={() => this.props.deleteTarea(this.props.tarea.id)}>X</button>
            </div>
        );

    }

}

Task.propTypes = {
    tarea: PropTypes.exact({
        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string,
        done: PropTypes.bool,
        id: PropTypes.number
    }),
    changeEstadoTarea: PropTypes.func.isRequired,
    deleteTarea: PropTypes.func.isRequired
};