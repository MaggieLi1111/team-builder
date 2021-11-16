import React from "react";

const Form = (props) => {


    const { formValues, buttonText, change, submit, errors} = props;

    const onChange = event =>{
        
        const { name, value } = event.target;
        // setFormValues({ ...formValues, [event.target.name]:event.target.value})
        change(name,value);
    }


    const onSubmit = event => {
        event.preventDefault();
        submit();
    }



    return (
        <form onSubmit={onSubmit}>

            <div className="form inputs">
            <label>Name
                <input
                    name="name"
                    value={formValues.name}
                    type="text"
                    onChange={onChange}
                    placeholder="Enter your name here!"
                    maxLength="30"
                />
            </label>
            <label>Email
                <input
                    name="email"
                    value={formValues.email}
                    type="email"
                    onChange={onChange}
                    placeholder="Enter you email here!"
                />
            </label>
            <label>Role
                <select name="role" onChange={onChange} value={formValues.role}>
                <option value="">--Select a role--</option>
                <option value="mom">MOM</option>
                <option value="father">FATHER</option>
                <option value="son">SON</option>
                </select>
            </label>
            <button type="submit">{buttonText}</button>
            </div>
            <h3 className="errors">{errors}</h3>
        </form>
    )
}

export default Form;