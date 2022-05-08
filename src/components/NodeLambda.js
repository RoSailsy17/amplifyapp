import React, {useState, useEffect} from 'react'

const NodeLambda = () => {

    const [nodeRes, setNodeRes] = useState([])

    useEffect(() => {
        fetch('https://xmk2duksybfc3t7zhsazaxtraq0aegwv.lambda-url.us-east-2.on.aws/', {method: 'GET'})
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