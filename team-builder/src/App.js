import React, { useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import Form from "./Form"
import Card from "./Card"
import data from "./dummy-data"

import './App.css';

function App() {
  const [member, setMember] = useState(data)
  console.log(data)

   const addPerson = person => {
     setMember( [ ...member, { ...person, id:Date.now()}])
   }



  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add Members</Link>

        <Routes>    
        <Route path="/add" render={props => 
        <Form { ...props} submitMember={addPerson} buttonText="Add Person" />} >
        </Route>

        <Route exact path="/" render={props => { member.map(person => 
        <Card person={person} />)}}>          
        </Route>
        </Routes>
  
    </div>
  );
}

export default App;
