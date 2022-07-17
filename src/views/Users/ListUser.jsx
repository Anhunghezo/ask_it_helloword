import React, { Component } from 'react'
import axios from 'axios'
import "./ListUser.scss"

export default class ListUser extends Component {

    state = {
        listUsers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
        console.log(this.state.listUsers)

    }

    render() {
        let { listUsers } = this.state
        return (
            <div className='list-user-container'>
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => (
                        <div className="child" key={item.id}>
                            {index + 1} - {item.first_name} {item.last_name}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}