import React from "react";
import { useState } from "react";

const NewEmployee = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const submitEmployee = (e) => {
        e.preventDefault()
        const newEmployee = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        props.addEmployee(newEmployee)
        clearInputs()
    }

    const clearInputs = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    return (
        <form>
            <h1>Add New Employee</h1>
            <input 
            type="text"
            name="firstName"
            placeholder="First Name" 
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
            />
            <input 
            placeholder="Last Name" 
            type="text"
            name="lastName" 
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required/>
            <input 
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required 
            />
            <button onClick={e => submitEmployee(e)}>Submit</button>
        </form>
    )
}

export default NewEmployee