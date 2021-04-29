// 다음 모듈 불러오기 구문은 매 예제마다 삽입
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// 클래스 기반 컴포넌트 정의
class MyComponent extends Component {
    // 렌더 함수 정의
    render() {
        // JSX를 이용하여 컴포넌트에서 보여줄 내용을 정의
        return (
            <div>My Component</div>
        )
    }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"))
