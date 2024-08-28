import React, { createContext, useContext, useState } from 'react';

export interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
  }
export interface User {
    username: string;
    password: string;
    cart: Item[];
  }

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const useUserContext = () => useContext(UserContext);

type UserProviderProps = {
    children: React.ReactNode;
  };

export const UserProvider= ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
