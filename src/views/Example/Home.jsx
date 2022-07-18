import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import homeImg from '../../assets/images/TTMM2019.jpg'
import {connect} from 'react-redux'

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todos')
    //     }, 3000)
    // }
    handleDeleteUser = (user) => {
        console.log("🚀 ~ file: Home.jsx ~ line 15 ~ Home ~ handleDeleteUser ~ user", user)
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () => {
        this.props.addUserRedux()
    }

    render() {
        console.log('>>>check props Redux: ', this.props.dataRedux)
        let listUsers = this.props.dataRedux

        return (
            <>
                <div>
                    Hello from HOME bye KHuynh 🥇
                </div>
                <div>
                    <img src={homeImg} alt="Home image" style={{width: '200px', height: '200px', borderRadius: '50%', marginTop: '30px'}}/>
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map( (item, index) => {
                            return (
                                    <div key={item.id}>
                                        {index+1} - {item.name} 
                                        &nbsp; <span onClick={() => this.handleDeleteUser(item)}>X</span>
                                    </div>
                            )
                        })
                    }

                    <button onClick={() => this.handleCreateUser()}>ADD NEW</button>
                </div>
            </>
        )
    }
}

// export default withRouter(Home)

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE_USER',
            payload: userDelete
        }),
        addUserRedux: () => dispatch({
            type: 'CREATE_USER'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))
