import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class DetailUser extends Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    handleBack = () => {
        this.props.history.push('/user/')
    }

    render() {
        let { user } = this.state
        let isEmptyObject = Object.keys(user).length > 0
        return (
            <>
                <div>DetailUser for user with id: {this.props.match.params.id}</div>
                { isEmptyObject && <>
                    <div>User's name:  {user.first_name} {user.last_name}</div>
                    <div>User's email:  {user.email}</div>
                    <div>
                        <img src={user.avatar} alt={`This is avatar of user with id: ${user.id}`} />
                    </div>
                    <div>
                        <button type="button" onClick={() => this.handleBack()}>Back</button>
                    </div>
                </>}
            </>
        )
    }
}

export default withRouter(DetailUser)