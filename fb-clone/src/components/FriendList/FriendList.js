// import useFetch from 'react-fetch-hook';
import React, {useState, useEffect} from 'react';
import ContactCards from '../ContactCards/ContactCards';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import './FriendList.css'

const FriendList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    async function getUserDetail(userID) {
        var url = new URL('https://d2kjnw8vmxc1wq.cloudfront.net/api/users/' + userID)
        
        return fetch(url).then(data => data.json())
    }

    const fetchItems = async() => {
        const data = await fetch(
            'https://d2kjnw8vmxc1wq.cloudfront.net/api/friends/' + localStorage.getItem('user_id')
        ).then(data => data.json());

        const friendList = await data.friend_list;
        var items = []
        
        for (const friend of friendList) {
            items.push(await getUserDetail(friend.user_id))
        }
        
        setItems(items);
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
                            key={item.userID}
                            id={item.userID}
                            image=""
                            profileSrc=""
                            title={item.nameFirst + " " + item.nameLast}
                            subtitle={item.email}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    );
  }
  
  export default FriendList;