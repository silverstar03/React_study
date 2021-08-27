import React, { useState } from 'react'
import ReactDOM from 'react-dom'


function Accordion() {

    const items = [
        { title: '제목 1', content: '내용 1' },
        { title: '제목 2', content: '내용 2' },
        { title: '제목 3', content: '내용 3' },
    ]

    const [num, setNum] = useState(null)

    const handleIdxChange = id => setNum(id)

    return (
        <div>
            {
                items.map((item, idx) =>{
                    return(
                        <div>
                            <div onClick={ ()=> {
                                if(num === idx){
                                    setNum(null)
                                }else{
                                    handleIdxChange(idx)
                                }
                            }}><h1>{item.title}</h1>
                            </div>
                            {
                                (num === idx) ?
                                <div>{item.content}</div> : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

ReactDOM.render(<Accordion />, document.getElementById("root"))