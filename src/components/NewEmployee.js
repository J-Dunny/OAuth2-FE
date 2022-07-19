import React from "react";

const NewEmployee = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()


    return (
        <form>
            <h1>Add New Employee</h1>
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Email" />
            <button>Submit</button>
        </form>
    )
}

export default NewEmployee