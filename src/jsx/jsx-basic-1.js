import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Josh Perez'
// 변수 내용 삽입 가능
const element = <h1>Hello, {name}</h1>

ReactDOM.render(element, document.getElementById("root"))

const lst = [100, 200, 300]
const person = {
    name: 'John',
    age: 20
}
function double(value) {
    return value * 2
}

const JSXwithExpressions = (
    <h1>
        {lst[0]}
        &nbsp;{person.name}
        &nbsp;{person.age}
        &nbsp;{2 + 2}
        &nbsp;{person.name.toUpperCase()}
        &nbsp;{person.name.length}
        &nbsp;{double(person.age)}
    </h1>)



const div = (<div>
    {1 + 1}
    {true}
    {false}
    {undefined}
    {null}
    {/*boolean, undefined, null은 실행해도 안나옴*/}
</div>)

/*falsy value의 종류
* false
* 0, -0
* 0n, -0n
* "", '',``
* null
* undefined
* NaN
* document.all
* */

ReactDOM.render(div, document.getElementById("root"))