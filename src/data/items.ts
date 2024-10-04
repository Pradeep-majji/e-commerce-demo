import Shoe from '../assets/Shoe.jpg';
import ProductB from '../assets/Product-B.jpg';
import productC from '../assets/productc.webp';
import productD from '../assets/productd.avif';

export interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  export const items: Item[] = [
    { id: 1, name: 'Product A', price: 19.99, image: Shoe },
    { id: 2, name: 'Product B', price: 29.99, image: ProductB },
    { id: 3, name: 'Product C', price: 9.99, image: productC },
    { id: 4, name: 'Product D', price: 49.99, image: productD },
  ];
  