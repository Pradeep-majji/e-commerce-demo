import { items } from '../data/items';
import ItemCard from './Item';
import Navbar from './Navbar';

const MainPage = () => {

  return (
    <div>
       <Navbar/>
      <div className="item-list" style={{ display: 'flex', flexWrap: 'wrap',marginLeft:'100px',marginTop:'150px',gap:'40px'}}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
