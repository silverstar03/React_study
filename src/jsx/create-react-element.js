import React from 'react'
import ReactDOM from 'react-dom' //이 두개는 거의 필수로 사용(react사용을 위해 받아오는 것)

//jsx(javascript XML)
//HTML태그 형식과 JS 표현식을 같이 기술할 수 있도록 자바 스크립트 문법을 확장한 문법
//모양새는 HTML과 닮았지만 실제로는는 JS코드로 변환되는 JS확장 문법

// const element = <h1>Hello, world!</h1>;
//const element = React.createElement("h1", null, "Hello, world!");

const img = React.createElement(
    'img',
    {
        src: 'https://picsum.photos/id/237/200/300',
        title: 'img title'
    }
)

const paragraph = React.createElement(
    'p',
    null,
    'Hello, React'
)


// const img = React.createElement('img', { src: 'https://picsum.photos/id/237/200/300', title: 'img title' })

const rootElement = document.getElementById("root")
//ReactDOM.render(element, rootElement)
//ReactDOM.render(img, rootElement)
ReactDOM.render(paragraph, rootElement)
