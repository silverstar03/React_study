import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showColorBox: true,
            myColor : [],
        }

    }

    saveMyColor = (color) => {
        this.setState(state => {
            return {
                myColor: state.myColor.concat(color)
            }
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.myColor.map((color, idx) => {
                        return <div style={{
                            width: '100px',
                            height: '100px',
                            background: color,
                            display: 'inline'
                        }}>{color}</div>
                    })
                }
                <button onClick={() => this.setState(state => ({ showColorBox: !state.showColorBox }))}>toggle color box</button>
                { this.state.showColorBox ? <RandomColorBoxWithTimer time={5} /> : null }
            </div>
        )
    }
}

class RandomColorBoxWithTimer extends Component {
    generateRandomColor = () => "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})

    showNewColor = () => {
        this.setState({ color: this.generateRandomColor() })
    }

    resetTimerWithNewColor = () => {
        clearInterval(this.state.intervalId)
        this.state.intervalId = setInterval(() => {
            console.log('from setInterval')

            this.setState(state => {
                return { time: state.time - 1 }
            })
        }, 1000)

        this.showNewColor()
        this.setState(state => {
            return { time: this.props.time }
        })
    }

    constructor(props) {
        super(props)

        this.state = {
            color: this.generateRandomColor(),
            time: this.props.time,
            intervalId: null,
        }
    }

    componentDidMount() {
        console.log('componentDidMount')

        this.state.intervalId = setInterval(() => {
            console.log('from setInterval')

            this.setState(state => {
                return { time: state.time - 1 }
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')

        // ?????? props, state ????????? ????????? ?????? this.props, this.state ??? ??????
        if(this.state.time === 0) {
            this.resetTimerWithNewColor()
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')

        clearInterval(this.state.intervalId)
    }



    render() {
        console.log("render")

        return (
            <div>
                <p>?????? ?????? : {this.state.time}</p>
                <p>?????? : {this.state.color}</p>
                <div style={{ width: '100px', height: '100px', background: `${this.state.color}` }}>
                </div>
                <button onClick={ this.resetTimerWithNewColor }>next color</button>
                <button onClick={() => {
                    this.props.myColor(this.state.color)
                }}>save color</button>
            </div>
        )
    }
}

ReactDOM.render(<Container />, document.getElementById("root"))