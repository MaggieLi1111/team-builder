import React, { useState } from "react"
import Form from "./Components/Form"
import Card from "./Card"
import data from "./dummy-data"

import './App.css';

const initialFormValues = {
  name: "",
  email: "",
  role: ""
};


function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState("");

  const [members, setMembers] = useState(data);
  /**Create state variables to hold team members and hold form values
   * create update and submit functions
  */

  const onSubmit = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
    if (!newMember.name || !newMember.email || !newMember.role) {
      setErrors("You didn't fill out all the contents, please check!")
      return;
    }
    setMembers([formValues, ...members]);
    setFormValues(initialFormValues)
    setErrors("")
  }

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value })

  }

  return (
    <div className="App">
      <h1>Team Builder App!</h1>
      <Form
        formValues={formValues}
        change={onChange}
        submit={onSubmit}
        errors={errors}
        buttonText="Add a member"
      />
      {members.map((member, index) => {
        return (
          <Card key={index} member={member} />
        )
      })}
    </div>
  )
}

export default App;
