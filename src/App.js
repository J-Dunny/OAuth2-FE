import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchApi, postNewEmployee, deleteEmployee } from './ApiCalls';
import { useEffect, useState } from 'react';

function App() {
  const [allUsers, setAllUsers] = useState([])
  const { isLoading } = useAuth0()

  useEffect(() => {
    getAllEmployees()
  }, [])

  const getAllEmployees = () => {
    fetchApi().then(data => setAllUsers(data))
  }
  
  const addEmployee = (newEmployee) => {
    postNewEmployee(newEmployee)
    .then(response => setAllUsers([...allUsers, response]))
  }

  const removeEmployee = (id) => {
    deleteEmployee(id)
    const users = allUsers.filter(user => user.id != id)
    setAllUsers(users)
  }

  if (isLoading) return <h1>Loading...</h1>


  return (
    <div >
      <LoginButton />
      <LogoutButton />
      <Profile allUsers={allUsers} addEmployee={addEmployee} removeEmployee={removeEmployee}/>
    </div>
  );
}

export default App;
