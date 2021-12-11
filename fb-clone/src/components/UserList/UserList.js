// import useFetch from 'react-fetch-hook';
import React, {useState, useEffect} from 'react';
import UserCards from '../UserCards/UserCards';
import './UserList.css';

const UserList = () => {
    const [items, setItems] = useState([]);
    const [friends, setFriends] = useState([]);
    const [inReqs, setInReqs] = useState([]);
    const [outReqs, setOutReqs] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    async function fetchUserFriends () {
        const data = await fetch(
            'https://d2kjnw8vmxc1wq.cloudfront.net/api/friends/' + localStorage.getItem('user_id')
        ).then(data => data.json());

        const friendList = await data.friend_list;
        var items = []
        
        for (const friend of friendList) {
            items.push(parseInt(friend.user_id))
        }
        
        console.log(items)
        setFriends(items);
    }

    async function fetchIncomingRequests () {
        const data = await fetch(
            'https://d2kjnw8vmxc1wq.cloudfront.net/api/friends/' + localStorage.getItem('user_id') + '/pending'
        ).then(data => data.json());

        const friendList = await data.friend_list;
        var items = []
        
        for (const friend of friendList) {
            items.push(parseInt(friend.user_id))
        }
        
        console.log(items)
        setInReqs(items);
    }

    async function fetchOutgoingRequests () {
        const data = await fetch(
            'https://d2kjnw8vmxc1wq.cloudfront.net/api/friends/' + localStorage.getItem('user_id') + '/pending_request'
        ).then(data => data.json());

        const friendList = await data.friend_list;
        var items = []
        
        for (const friend of friendList) {
            items.push(parseInt(friend.user_id))
        }
        
        console.log(items)
        setOutReqs(items);
    }

    const params = new URLSearchParams(window.location.search) // id=123
    const firstName = params.get('firstName')
    const isFriend = 0
    const fetchItems = async() => {
        fetchUserFriends()
        fetchIncomingRequests()
        fetchOutgoingRequests()

        const url = new URL('https://d2kjnw8vmxc1wq.cloudfront.net/api/users')

        if (firstName) {
            url.searchParams.append('firstName', firstName);
        }
        const data = await fetch(
            url
        ).then(data => data.json());

        const items = await data.users;
        console.log(data)
        console.log(items)
        setItems(items);
    };

    return (
        <div className="friend__list">
            <div className="friend__list__feed">
                <div className="friend__list__grid">
                    {items.map(item => (
                        <UserCards 
                            key={item.userID}
                            id={item.userID}
                            image=""
                            profileSrc=""
                            title={item.nameFirst + " " + item.nameLast}
                            subtitle={item.email}
                            isFriend={(friends.includes(item.userID) || friends.includes(item.userID) || friends.includes(item.userID))}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    );
  }
  
  export default UserList;