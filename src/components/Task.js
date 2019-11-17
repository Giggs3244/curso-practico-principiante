import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="tarea">
                <p>Nombre de la tarea: {this.props.tarea.nombre}</p>
                <p>Descripción de la tarea: {this.props.tarea.descripcion}</p>
            </div>
        );

    }

}

Task.propTypes = {
    tarea: PropTypes.object
};