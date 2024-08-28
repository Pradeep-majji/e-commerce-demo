import { Item } from './items';

export interface User {
  username: string;
  password: string;
  cart: Item[];
}

export const users: User[] = [
];
