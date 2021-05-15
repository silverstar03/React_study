import React, { Component, createRef } from 'react'
import ReactDOM from 'react-dom'
class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            isForeigner: false,
            roomNumber: 'one'
        };
    }
    handleInputChange = (event) => {
        const target = event.target;    //Dom 요소

        //target은 checked에 true,false 값이 들어가있음
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // ES6에서 도입된 computed property names 문법 활용
        // https://eloquentcode.com/computed-property-names-in-javascript
        this.setState({
        // 태그의 name 속성값을 속성키로 사용
            [name]: value //대괄호 안의 내용을 계산하여 바꿔줌 name은 input태그에 있는 name이고 그 안에 있는 내용을 계산하는 것
        });
    }
    handleSubmit = (e) => {
        alert("submit!");
        // 필요한 네트워크 요청(ex: ajax) 보내기
        // (입력 요소와 상태가 동기화되어 있으므로, 필요한 내용은 전부 state 객체에서 참조 가능)
        e.preventDefault(); //그 태그의 고유 동작을 중단시킨다.
    }
    render() {
        return (
            <form>
                <p>{JSON.stringify(this.state)}</p>
                <hr />
                <label>이름 <input value={this.state.name} name="name"
                                 type="text" onChange={this.handleInputChange} /></label><br />
                <label>날짜 <input value={this.state.date} name="date"
                                 type="date" onChange={this.handleInputChange} /></label><br />
                <label>외국인 여부 <input checked={this.state.isForeigner}
                                     name="isForeigner" type="checkbox" onChange={this.handleInputChange} /></label>
                <br />
                <select name="roomNumber" value={this.state.roomNumber}
                        onChange={this.handleInputChange}>
                    <option value="one">1개</option>
                    <option value="two">2개</option>
                    <option value="three">3개</option>
                </select>
                <br />
                <input type="submit" value="제출" onClick={this.handleSubmit} />
            </form>
        );
    }
}
ReactDOM.render(<ReservationForm />, document.getElementById("root"))
