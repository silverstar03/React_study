import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ImageSlider extends Component {
    constructor(props) {
        super(props)
        // 기능 구현에 필요한 값을 state에 추가 가능
        this.state = {
            images: [
                'https://via.placeholder.com/100x100?text=Image+1',
                'https://via.placeholder.com/100x100?text=Image+2',
                'https://via.placeholder.com/100x100?text=Image+3',
                'https://via.placeholder.com/100x100?text=Image+4'
            ],
            index: 0
        }
    }
    prev = () => {
        this.setState((state) => {
            return { index: state.index-1}
        })
    }

    next = () => {
        this.setState((state) => {
            return { index :state.index+1}
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.images[this.state.index]}/><br/>
                {this.state.index <= 0 ? null :<button onClick={() => {this.prev()}}>prev</button>}
                {this.state.index >= this.state.images.length-1 ? null :<button onClick={() => {this.next()}}>next</button>}
            </div>
        )
    }
}
ReactDOM.render(<ImageSlider />, document.getElementById("root"))
