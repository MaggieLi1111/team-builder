import React, { useState } from "react";

const Form = (props) => {
    console.log(props);

    const { submitMember, initialMember, buttonText, history } = props;
    const [member, setMember] = useState(initialMember || {name:"", email:"", role:""})
    
    const handleChange = event => {
        setMember( {...member, [event.target.name]:event.target.value} );
    }


    const handleSubmit = event => {
        event.preventDefault();
        submitMember(member);
        setMember({
            name:"",
            email:"",
            role:""
        })
        history.pushState("/");
    }



    return (
        <form onSubmit={handleSubmit} >
            <input placeholder="name"
                value={member.name}
                name="name"
                onChange={handleChange} />
            <input placeholder="email"
                value={member.email}
                name="email"
                onChange={handleChange} />
            <input placeholder="role"
                value={member.role}
                name="role"
                onChange={handleChange} />
            <button type="submit">{buttonText}</button>
        </form>
    )
}

export default Form;