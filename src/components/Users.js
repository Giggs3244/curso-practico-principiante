import React, { Component } from 'react'

export default class Users extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersjson = await users.json();
        console.log(usersjson);
        this.setState({users:usersjson});
    }


    render() {
        return (
            <div className="users">
                <h1>Users</h1> 
                {
                    this.state.users.map(user => {
                        return (
                            <div key={user.id} className="user">
                                <p>Nombre: {user.name}</p>
                                <p>id: {user.id}</p>
                                <p>Nombre de usuario: {user.username}</p>
                                <p>Correo: {user.email}</p>
                            </div>
                        )
                    })    
                }
            </div>
        )
    }
    
}
