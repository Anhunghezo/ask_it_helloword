import React from 'react'

import './ListTodo.scss'

import AddTodo from './AddTodo'
import { toast } from 'react-toastify';
import Color from '../HOC/Color';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Clean the dish' },
            { id: 'todo3', title: 'Washing machine' },
            { id: 'todo4', title: 'Do excercise' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success('Add new todo success!🥳', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter((item) => item.id !== todo.id)
        console.log(currentTodos)
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete Success!!!")
    }

    handleEditTodo = (todo) => {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0

        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))
            listTodosCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })

            toast.success("Update todo success! 🎏")
            return
        } else {
            this.setState({
                editTodo: todo
            })
        }
    }

    handleOnChangeEdit = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.table(this.props)
        return (
            <>
                <p>
                    Simple TODO APP with React.js by &copy; KQH
                </p>
                <div className='list-todo-container'>
                    <AddTodo addNewTodo={this.addNewTodo} />
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                            return (
                                <div key={item.id} className="todo-child">
                                    {
                                        isEmptyObj === true ?
                                            <span>{index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {
                                                    editTodo.id === item.id ?
                                                        <span>
                                                            {index + 1} - <input value={editTodo.title}
                                                                onChange={(event) => this.handleOnChangeEdit(event)}
                                                            />
                                                        </span>
                                                        :
                                                        <span>{index + 1} - {item.title} </span>
                                                }
                                            </>
                                    }
                                    <button className='edit'
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {
                                            isEmptyObj === false && editTodo.id === item.id ? "Save" : "🛹Edit"
                                        }
                                    </button>
                                    <button className='delete'
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete🌈</button>
                                </div>
                            )
                        })}
                    </div>
                    {/* <ToastContainer /> */}
                </div>
            </>
        )
    }
}

export default Color(ListTodo)