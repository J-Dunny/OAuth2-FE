import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NewEmployee from "./NewEmployee";
import '../App.css';

const Profile = (props) => {
    const { user, isAuthenticated } = useAuth0()
    // console.log(user)
    if(isAuthenticated && props.allUsers[0]){
        let allUserCards = props.allUsers.map(user => {

            return (
                <div className="user-card" key={user.id}>
                    <h2>{user.firstName} {user.lastName}</h2>
                    <h3>{user.email}</h3>
                    <p>Date Added: {user.createdAt}</p>
                    <button onClick={() => props.removeEmployee(user.id)}>Delete</button>
                </div>
            )
        })
    return (
        <div>
            <img src={user.picture}/>
            <h2>Wecome {user.name}</h2>
            {/* <p>Email: {user.email}</p> */}
            {/* <p>ID: {user.sub}</p> */}
            {/* {JSON.stringify(user, null, 2)} */}
            <NewEmployee addEmployee={props.addEmployee}/>
            <h1>Current Employees</h1>
            <hr/>
            {allUserCards}
        </div>
    )}
}

export default Profile