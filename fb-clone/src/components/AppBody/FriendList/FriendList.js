// import useFetch from 'react-fetch-hook';
import React, {useState, useEffect} from 'react';
import ContactCards from './ContactCards';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import './FriendList.css'

const FriendList = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(
            'https://randomuser.me/api/?nat=us&randomapi&results=30'
        );

        const items = await data.json();
        setItems(items.results);
    };

    return (
        <div className="friend__list">
            <div className="friend__input">
                <PersonSearchIcon />
                <input placeholder="Filter Friend" type="text" />
            </div>
            <div className="friend__list__feed">
                <div className="friend__list__grid">
                    {items.map(item => (
                        <ContactCards 
                            image=""
                            profileSrc=""
                            title={item.login.username}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    );
  }
  
  export default FriendList;