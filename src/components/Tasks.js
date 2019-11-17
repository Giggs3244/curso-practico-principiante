import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Task from './Task';

export default class Tasks extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.tareas.map((v, i) => {
                <Task tarea={v}></Task>
            })
        );
    }

}

Tasks.propTypes = {
    tareas: PropTypes.array
};