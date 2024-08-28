import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/users';
interface User {
  username: string;
  password: string;
  cart: Item[];
}
interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = ()=>{
    navigate('/login');
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.isValid) {
      alert(usernameValidation.message);
      return;
    }
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      alert(passwordValidation.message);
      return;
    }
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      alert('Username already exists');
      navigate('/login');
      return;
    }

    const newUser: User = { username, password, cart: [] };
    users.push(newUser);
    alert('registeration successful , please login to continue');
    navigate('/login');
  };

  const validateUsername = (username:any) => {
    const usernameRegex = /^[a-zA-Z0-9._@]+$/; 
    const isValid = usernameRegex.test(username) && username.length >= 8;
    return {
      isValid,
      message: isValid
        ? ''
        : 'Username must be at least 8 characters long, contain @, and only contain letters, numbers, periods, and underscores.',
    };
  };

  const validatePassword = (password:any) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
    const isValid = passwordRegex.test(password);
    return {
      isValid,
      message: isValid
        ? ''
        : 'Password must be at least 8 characters long and contain at least one number, lowercase letter, uppercase letter, and special character.',
    };
  };

  return (
    <form onSubmit={handleSubmit} style={{
      border: 'solid black',
      padding: '20px',
      margin: 'auto',
      width: '400px',
      borderRadius: '5px',
    }}>
      <h1>E-Commerce Register</h1>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" style={{ marginRight: '40px', marginLeft: '20px', background: 'blue', color: 'white' }}>
        Register
      </button>
      <button onClick={handleLogin} style={{ marginRight: '40px', marginLeft: '100px', background: 'green', color: 'white' }}>
        Login
      </button>
    </form>
  );
};

export default Register;
