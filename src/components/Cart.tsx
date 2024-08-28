import { useUserContext } from '../context/UserContext';

const Cart = () => {
  const { user } = useUserContext();

  const calculateTotal = () => {
    return user?.cart?.reduce((total, item) => total + item.price, 0) || 0;
  };
  const total = calculateTotal();
  const handlePayment=()=>{
    alert('you are navigating to payment page');
  }
  return (
    <div style={{border:'solid black'}}>
      <h2>Your Cart</h2>
      {user?.cart?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
        { user?.cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
      <button style={{color:'white',background:'blue'}} onClick={handlePayment}>Payment</button>
    </div>
  );
};

export default Cart;
