import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Q) stop, resume 버튼 추가하기
class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: this.props.time,  //남은시간
            timeout: false,         //타임아웃 여부 처음엔 false
            intervalId: null,
            stop : false
        }
    }

    componentDidMount() {
        // 타이머 설정
        this.state.intervalId = setInterval(() => { // 정수값 리턴
           this.setState((state) => {
               if(!state.stop){
                   if( state.time === 1 ) {
                       clearTimeout(this.state.intervalId)
                       return { timeout: true, time: state.time - 1}
                   } else {
                       return { time: state.time - 1 }
                   }
               }
            })
        }, 1000)
    }

    componentWillUnmount() { //Dom이 사라지는 곳이 없어서 영원히 호출 안됨
        // 타이머 해제
        clearTimeout(this.state.intervalId)
    }

    timerstop(){
        this.setState((state) => {
            return { time : this.state.intervalId}
        })
    }
    timerresume(){

    }


    render() {
        return (
            <div>
                {this.state.timeout ? <h2>timeout</h2> : <h2>{this.state.time}</h2>}
                <button onClick={()=> this.setState({stop : true})}>Stop</button>
                <button onClick={()=> this.setState({stop : false})}>Resume</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Timer time={10} />
        <Timer time={30} />
        <Timer time={60} />
    </div>,
    document.getElementById("root"))