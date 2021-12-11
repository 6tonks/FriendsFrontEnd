// import useFetch from 'react-fetch-hook';
import React, {useState, useEffect} from 'react';
import UserCards from '../UserCards/UserCards';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const [items, setItems] = useState([]);
    const [friends, setFriends] = useState([]);
    const [inReqs, setInReqs] = useState([]);
    const [outReqs, setOutReqs] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const params = new URLSearchParams(window.location.search) // id=123
    const firstName = params.get('firstName')
    const fetchItems = async() => {
        var items = []
        
        axios.get(
            'https://d2kjnw8vmxc1wq.cloudfront.net/api/friends/' + localStorage.getItem('user_id')
        ).then(data => {
            const friendList = data.data.friend_list
            for (const friend of friendList) {
                items.push(parseInt(friend.user_id))
            }

            axios.get(
                'https://d2kjnw8vmxc1wq.cloudfront.net/api/friends/' + localStorage.getItem('user_id') + '/pending'
            ).then(data => {
                const friendList = data.data.friend_list
                for (const friend of friendList) {
                    items.push(parseInt(friend.user_id))
                }

                axios.get(
                    'https://d2kjnw8vmxc1wq.cloudfront.net/api/friends/' + localStorage.getItem('user_id') + '/pending_request'
                ).then(data => {
                    const friendList = data.data.friend_list
                    for (const friend of friendList) {
                        items.push(parseInt(friend.user_id))
                    }

                    setFriends(items)

                    var params = {}
                    if (firstName) {
                        params = {
                            firstName: firstName
                        }
                    }
                    axios.get(
                        'https://d2kjnw8vmxc1wq.cloudfront.net/api/users', { params: params }
                    ).then(data => {
                        const users = data.data.users
                        console.log(users)
                        setItems(users);
                    });
                })
            })
        });
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