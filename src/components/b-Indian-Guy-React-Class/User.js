import React from 'react'

const User = (props) => {
    return (
    <div>
        <h2>Name: {props.children} </h2>
        <h3>Age: {props.age}</h3>
    </div>)
}

export default User;