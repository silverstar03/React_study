import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class TodoItem extends Component {
    render() {
        const { completed, text } = this.props.todo

        return (
            <div>
                <div>
                    <span
                        style={completed ? { textDecoration: 'line-through' } : null}
                        onClick={() => this.props.handleTodoStatusToggle(this.props.idx)}>
                        {text}
                    </span>&nbsp;
                    <button onClick={() => this.props.handleTodoRemove(this.props.idx)}>X</button>
                </div>
            </div>
        )
    }
}

class TodoList extends Component {
    render() {
        return (
            <ol>
                {
                    this.props.todos.map((todo, idx) => {
                        return (
                            <li key={idx}> //key는 목록을 구분할 수 있는 것 (index는 좋지 않긴 함)
                                <TodoItem
                                    idx={idx}
                                    todo={todo}
                                    handleTodoStatusToggle={this.props.handleTodoStatusToggle}
                                    handleTodoRemove={this.props.handleTodoRemove}/>
                            </li>
                        )
                    })
                }
            </ol>
        )
    }
}

class TodoAdder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.handleChange} value={this.state.input} />
                <button onClick={() => {
                    this.props.handleTodoAdd({ completed: false, text: this.state.input })
                    // input으로 받아온 것 text에 넣음
                    this.setState({ input: '' }) //입력창 clear
                }}>Add</button>
            </div>
        )
    }
}

class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                { completed: false, text: '리액트 공부하기' },
                { completed: true, text: 'ES6 문법 공부하기' },
            ]
        }
    }

    handleTodoAdd = (newTodo) => {
        this.setState((state) => ({
            todos: state.todos.concat(newTodo)
        }))
    }

    handleTodoStatusToggle = (todoIndex) => {
        this.setState((state) => ({
            todos: state.todos.map((todo, idx) => {
                if(idx === todoIndex) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        }))
    }

    handleTodoRemove = (todoIndex) => {
        this.setState((state) => ({
            //'_'는 필요없는 것
            todos: state.todos.filter((_, idx) => {
                return idx !== todoIndex
            })
        }))
    }

    render() {
        return (
            <div>
                <TodoList
                    todos={this.state.todos}
                    handleTodoStatusToggle={this.handleTodoStatusToggle}
                    handleTodoRemove={this.handleTodoRemove}/>
                <TodoAdder handleTodoAdd={this.handleTodoAdd} />
            </div>
        );
    }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<TodoApp />, rootElement)