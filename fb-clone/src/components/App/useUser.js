import { useState } from 'react';

export default function useUser() {
  const getUser = () => {
    const user = {
      user_id: localStorage.getItem('user_id'),
      first_name: localStorage.getItem('first_name'),
      last_name: localStorage.getItem('last_name'),
      email: localStorage.getItem('email'),
      address_id: localStorage.getItem('address_id'),
    }
    return user
  };

  const [user, setUser] = useState(getUser());

  const saveUser = user => {
    localStorage.setItem('user_id', user.userID);
    localStorage.setItem('first_name', user.nameLast);
    localStorage.setItem('last_name', user.nameFirst);
    localStorage.setItem('email', user.email);
    localStorage.setItem('address_id', user.addressID);
    setUser(user);
  };

  return {
    setUser: saveUser,
    user
  }
}