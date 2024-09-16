import React from "react"

const Card = ( props ) => {
    const { member } = props;
    if(!member){
        return <h3>Fetching your friend's details, please wait...</h3>
    }

    return (
        <>
        <div>{member.name}</div>
        <p>Email: {member.email}</p>
        <p>Eole: {member.role}</p>
        </>
    )
}

export default Card;