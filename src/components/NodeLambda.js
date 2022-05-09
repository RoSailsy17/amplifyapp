import React, {useState, useEffect} from 'react'

const NodeLambda = () => {

    const [nodeRes, setNodeRes] = useState([])

    useEffect(() => {
        fetch('https://mzwucusv45zeh4xelpetpfd7ca0psrgr.lambda-url.ap-northeast-1.on.aws/', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setNodeRes(data)
        })
    },[])

    // {"foo":"Hello, world","bar":"Goodbye, world"}

    return (
        <div>
            <p>{nodeRes.foo}</p>
            <p>{nodeRes.bar}</p>
        </div>
    )
}

export default NodeLambda