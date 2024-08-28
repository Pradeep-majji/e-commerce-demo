import { Item as ItemType } from '../data/items';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

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

interface ItemProps {
  item: ItemType;
}

const ItemCard = ({ item }: ItemProps) => {
  const { user, setUser } = useUserContext();
  const nav=useNavigate();

  const handleAddToCart = () => {
    if (user) { 
      const updatedUser = { ...user, cart: [...user.cart, item] } as User;
      setUser(updatedUser);
      alert('item added to cart successfully');
    }
    else{
        alert('you are not logged in! please login to continue');
        nav('/login')
    }
  };

  return (
    <div className="item" style={{border:'solid black ',height:'400px',width:'300px',alignItems:'center'}}>
      <center>
      <img src={item.image} alt={item.name} style={{height:'220px',width:'220px'}}/>
      <h2>{item.name}</h2>
      <p>Price: ${item.price}</p>
      <button onClick={handleAddToCart} style={{background:'blue',color:'white'}}>Add to Cart</button>
      </center>
    </div>
  );
};

export default ItemCard;
