import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = (props) => {
    const { user, isAuthenticated } = useAuth0()
    let allUserCards = props.allUsers.map(user => {
        return (
            <div key={user.id}>
                <h2>{user.firstName} {user.lastName}</h2>
                <h3>{user.email}</h3>
            </div>
        )
    })
    // if(props.allUsers){
    return (
        isAuthenticated &&

        <div>
            <img src={user.picture}/>
            <h2>Wecome {user.name}</h2>
            {/* <p>Email: {user.email}</p> */}
            {/* <p>ID: {user.sub}</p> */}
            {/* {JSON.stringify(user, null, 2)} */}
            <form>
                <h1>Add New Employee</h1>
                <input placeholder="First Name"/>
                <input placeholder="Last Name"/>
                <input placeholder="Email"/>
                <button>Submit</button>
            </form>
            <h1>Current Employees</h1>
            <hr/>
            {props.allUsers && allUserCards}
        </div>
    )
}

export default Profile