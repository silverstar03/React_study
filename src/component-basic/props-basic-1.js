// 다음 모듈 불러오기 구문은 매 예제마다 삽입
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

class ComponentWithProps extends Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    render() {
        return (
            <>
                <p>{this.props.value.toString()}</p>
            </>
        )
    }
}


// ReactDOM.render(<ComponentWithProps />, document.getElementById("root"))

class PersonProfile extends Component {
    render() {
        const { name, age, gender, profile } = this.props
        // props 값은 수정 불가
        // Cannot assign to read only property 'name' of object '#<Object>'
        // this.props.name = 'Jane'

        return (
            <div
                className='person'
                style={this.props.highlight ? {color: 'red'} : null}>
                <h1>Profile</h1>
                <img src={profile} />
                <p>name : {name}</p>
                <p>age : {age}</p>
                <p>gender : {gender}</p>
            </div>
        )
    }
}

// ReactDOM.render(
//     <div>
//         <PersonProfile
//             name='John'
//             age={35}
//             gender='male'
//             profile='https://randomuser.me/api/portraits/men/75.jpg' />
//
//     </div>,
// document.getElementById("root"))

const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}

// 클래스의 속성에 defaultProps 속성(객체 타입)을 정의하고 기본 전달 props 값을 설정 가능
PersonProfile.defaultProps = {
    name: "Unknown",
    gender: "Unknown",
    age: 0,
    profile: 'https://via.placeholder.com/150'
}

// 기본 props 값도 당연히 적용 가능
PersonProfile.defaultProps = {
    name: "Unknown",
    profile: 'https://via.placeholder.com/150'
}
// 클래스에 propTypes 속성 설정하여 타입 지정 가능
PersonProfile.propTypes = {
// 속성이름 : PropTypes.자료형[.isRequired]
// age => 숫자 타입(number)의 값이어야 하며 필수적(isRequired)으로 전달해야 할 속성
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
// name => 문자열 타입(string)의 값이어야 하며 반드시 필요한 속성은 아님
    name: PropTypes.string,
    profile: PropTypes.string
}


ReactDOM.render(
    <div>
        <PersonProfile
            name='John'
            age={35}
            gender='male'
            profile='https://randomuser.me/api/portraits/men/75.jpg' />
        <PersonProfile {...anotherPerson} />
        <PersonProfile age='male' gender={30} />
        <PersonProfile />
    </div>,
    document.getElementById("root"))

