// import useFetch from 'react-fetch-hook';
import React, {useState, useEffect} from 'react';
import ContactCards from '../ContactCards/ContactCards';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import './FriendList.css'

const FriendList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
        // fetch('https://randomuser.me/api/?nat=us&randomapi&results=30')
        // // fetch('http://friends-service-env.eba-cpwd9pmm.us-west-2.elasticbeanstalk.com/friends/heavycat159')
        // .then(response => response.json())
        // .then(jsondata => setItems(jsondata))
        // .then(message => console.log(message));
    }, []);

    const fetchItems = async() => {
        const data = await fetch(
            'https://randomuser.me/api/?nat=us&randomapi&results=30'
            // 'http://friends-service-env.eba-cpwd9pmm.us-west-2.elasticbeanstalk.com/friends/heavycat159'
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
                            key={item.login.username}
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