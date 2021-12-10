import {Grid} from '@mui/material';
import React, {useState, useEffect} from 'react';
import RequestCard from '../RequestCard';
import './FriendRequest.css'

const FriendRequest = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetchItems();
    }, []);

    async function getUserDetail(userID) {
        // var url = new URL('https://d2kjnw8vmxc1wq.cloudfront.net/api/users/' + userID)
        var url = new URL('http://192.168.0.8:5000/users/' + userID)
        
        return fetch(url).then(
            async function(data) {
                var temp_data = await data.json()
                if (temp_data.error == null) {
                    const address_id = temp_data.addressID
                    const address_url = new URL('https://d2kjnw8vmxc1wq.cloudfront.net/api/addresses/' + address_id)
                
                    const address = await fetch(address_url).then(address_data => address_data.json());
                    if (address.error == null) {
                        temp_data.address = address.city + " " + address.state + " " + address.countryCode
                    } else {
                        temp_data.address = ""
                    }
                } else {
                    temp_data = null
                }
                return temp_data
            }
        )
    }

    const fetchItems = async() => {
        const data = await fetch(
            // 'https://randomuser.me/api/?nat=us&randomapi&results=30'
            'https://d2kjnw8vmxc1wq.cloudfront.net/api/friends/' + localStorage.getItem('user_id') + '/pending'
        ).then(data => data.json());

        const friendList = await data.friend_list;
        
        var items = []
        
        for (const friend of friendList) {
            const userDetail = await getUserDetail(friend.user_id)
            if (userDetail) {
                items.push(userDetail)
            }
        }
        setItems(items);
    };

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    };

    return (
        <div className="friend__requests">
            <Grid item container spacing={1} xs={12}>
                <div className="friend__input">
                </div>
                
                {items.map(item => (
                    <RequestCard 
                        key={item.userID}
                        id={item.userID}
                        name={item.nameFirst + " " + item.nameLast}
                        text={item.address}
                        show_acc={1}
                    />
                ))}

            </Grid>
        </div>
    )

}

export default FriendRequest;