import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none', padding: '0.5rem' }}>E-commerce</Link>
      {user ? (
        <>
          <span style={{ color: 'inherit',fontSize:'20px',marginLeft:'20px' }}>Hi, {user.username}</span>
          <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none',marginLeft:'1000px' }}>Cart{user.cart.length}</Link>
          <button onClick={handleLogout} style={{ color: 'red', textDecoration: 'none',marginLeft:'80px' }}>Logout</button>
        </>
      ) : (<>
        <Link to="/login" style={{ color: 'inherit', textDecoration: 'none',marginLeft:'1200px' }}>Login</Link>
        <Link to="/register" style={{ color: 'inherit', textDecoration: 'none',marginLeft:'80px' }}>Register</Link></>
      )}
    </nav>
  );
};

export default Navbar;
