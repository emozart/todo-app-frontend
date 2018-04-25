import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleAdd(){
        const description = this.state.description
        Axios.post(URL, { description })
            .then(res => console.log('funcionou!!'))
    }

    handleChange(e){
        this.setState({description: e.target.value })
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description}  handleAdd={this.handleAdd}
                    handleChange={this.handleChange}/>
                <TodoList/>
            </div>
        )
    }
}