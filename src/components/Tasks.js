import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Task from './Task';

export default class Tasks extends Component {

    render() {
        return this.props.tareas.map((v, i) => <Task key={v.id} tarea={v}></Task>);
    }

}

Tasks.propTypes = {
    tareas: PropTypes.array.isRequired
};