

export interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  export const items: Item[] = [
    { id: 1, name: 'Product A', price: 19.99, image: 'Shoe.jpg' },
    { id: 2, name: 'Product B', price: 29.99, image: 'Product-B.jpg' },
    { id: 3, name: 'Product C', price: 9.99, image: 'productc.webp' },
    { id: 4, name: 'Product D', price: 49.99, image: 'productd.avif' },
  ];
  