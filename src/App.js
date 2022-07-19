import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchApi, postNewEmployee } from './ApiCalls';
import { useEffect, useState } from 'react';

function App() {
  const [allUsers, setAllUsers] = useState()
  const { isLoading } = useAuth0()

  useEffect(() => {
    fetchApi().then(data => setAllUsers(data))
  })

  if (isLoading) return <h1>Loading...</h1>


  return (
    <div >
      <LoginButton />
      <LogoutButton />
      <Profile allUsers={allUsers} />
    </div>
  );
}

export default App;
