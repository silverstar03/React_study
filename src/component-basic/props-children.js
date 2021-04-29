// 다음 모듈 불러오기 구문은 매 예제마다 삽입
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

class Child extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class Parent extends Component {
    render() {
        return (
            <React.Fragment>
                <Child>Hello</Child>
                <hr />
                <Child>
                    <h1>Title</h1>
                    <div>React</div>
                    <ol>
                        <li>item 1</li>
                        <li>item 2</li>
                    </ol>
                    <Child>Inner Child</Child>
                </Child>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Parent />, document.getElementById("root"))


class ChildWithFunctionProp extends Component {
    render() {
        return (
            <div>
                {this.props.children()}
            </div>
        )
    }
}

// ReactDOM.render(<ChildWithFunctionProp>
//     {() => {
//         return (
//             <div>Function Prop</div>
//         )
//     }}
// </ChildWithFunctionProp>, document.getElementById("root"))


