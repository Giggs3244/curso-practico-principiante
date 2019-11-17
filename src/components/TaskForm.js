import React, { Component } from 'react';

export default class TaskForm extends Component {

    render() {
        return (
            <form>
                <input type="text" placeholder="Nombre de la tarea"/>
            </form>
        );
    }

}