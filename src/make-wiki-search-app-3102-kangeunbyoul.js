import React, { useState, useEffect, useCallback } from "react"
import ReactDOM from "react-dom"

const Search = ({label, handleSubmit}) => {
    const [keyword, setKeyword] = useState('')
    return (
        <div>
            <input type="text"
                   value = {keyword}
                   onChange={(e) => {
                       setKeyword(e.target.value)
                   }}
            />
            <button onClick = {()=>{
                const k = keyword.trim()
                if(k.length === 0){
                    alert('검색어를 정확히 입력해주세요.')
                }else{
                    handleSubmit(k)
                }
            }}>{label ?? "검색"}</button>
        </div>
    )
}

const WikiSearchApp = (props) => {
    const [searchData, setSearchData] = useState(null)

    const handleSubmit = (keyword) => {
        fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${keyword}`)
            .then(res => res.json())
            .then(data => {
                setSearchData(data)
            })
    }


    let content = <h1>no search result</h1>

    if(searchData !== null) {
        content = (
            <div>
                <ul>
                    {
                        searchData[1].map((title, idx) => (
                            <li>
                                <a href={searchData[3][idx]}>{title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }


    return (
        <div>
            <Search handleSubmit={handleSubmit} label="찾기" />
            {content}
        </div>
    )
}

ReactDOM.render(<WikiSearchApp />, document.getElementById("root"))