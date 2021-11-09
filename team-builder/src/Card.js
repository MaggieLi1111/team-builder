import React from "react"

const Card = ( props) => {
    const { person} = props;
    return (
        <>
        <div>{person.name}</div>
        <div>{person.email}</div>
        <div>{person.role}</div>
        </>
    )
}

export default Card;