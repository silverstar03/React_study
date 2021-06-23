import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class SingleAccordion extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '제목',
            content: '내용',
            expanded: false
        }
    }

    render() {
        return (
            <div>
                <div onClick={() => {
                    this.setState(state =>{
                        return {expanded : !state.expanded}
                    })
                }}>{this.state.title}</div>
                {
                    this.state.expanded?<div>{ this.state.content}</div>
                        :null
                }
            </div>
        )
    }
}
ReactDOM.render(<SingleAccordion />, document.getElementById("root"))