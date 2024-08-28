import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { users } from '../data/users';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUserContext();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = users.find((user) => user.username === username && user.password === password);
    if (foundUser) {
      setUser(foundUser);
      navigate('/');
    } else {
      console.error('Invalid credentials');
      alert('Please enter valid credintials')
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      border: 'solid black',
      padding: '20px',
      margin: 'auto',
      width:'400px',
      borderRadius: '5px'
    }}>
      <h1>E-Commerce Login</h1>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
       <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      <br />
      <br/>
      <button type="submit" style={{marginRight:'40px',marginLeft:'20px',background:'blue',color:'white'}}>Login</button>
      <Link to='/register'style={{background:'green',color:'white', textDecoration: 'none',marginLeft:'100px'}}>Register</Link>
    </form>
  );
};

export default Login;
