import React from 'react'

const CodeBlock = ({ code }) => {
    const style = {
        backgroundColor: "black",
        color: "white",
        width: "100px",
        height: "100px"
    }

    return (
        <div style={style}>
            {code}
        </div>
    )
}

export default CodeBlock
