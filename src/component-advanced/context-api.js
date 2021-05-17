// 다음 모듈 불러오기 구문은 매 예제마다 삽입
import React, { Component, createContext } from 'react'
import ReactDOM from 'react-dom'

const MyContext = createContext('default');


class ChildComponent extends Component {
    render() {
        return (
            // Consumer 컴포넌트로 전체 컴포넌트 내용을 감싸기
        <MyContext.Consumer>
            {/* 내부에서 콜백 함수를 정의하여 값(valueFromContext)을 전달받음 */}
            {valueFromContext => {
                return (
                    <div>
                        <p>id : {this.props.id}</p>
                        <p>value : {valueFromContext}</p>
                    </div>
                )
            }}
        </MyContext.Consumer>
    );
    }
}
const Nested = (props) => <>{props.children}</>
class App extends Component {
    render() {
        let globalValue = 'global'
        return (
            <div>
                <MyContext.Provider value={globalValue}>
                    {/* props 값을 전달하지 않아도 내부에서 Provider를 통해 전달한 값에 접근 가능 */}
                    <ChildComponent id='child 1' />
                    <Nested>
                        <Nested>
                            <Nested>
                                {/* 비록 많은 중첩 컴포넌트의 내부에 포함되어 있다고하더라도, (props를 통해 값을 전달받지 않아도) Context 값에 접근 가능 */}
                                <ChildComponent id='child 2' />
                            </Nested>
                        </Nested>
                    </Nested>
                </MyContext.Provider>
                {/*Provider 컴포넌트로 감싸지 않은 ChildComponent는 디폴트값('default')을 전달받게 됨*/}
                <ChildComponent id='child 3' />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"))
