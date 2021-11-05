import {Grid} from '@mui/material';
import React, {useState, useEffect} from 'react';
import RequestCard from '../RequestCard';
import './FriendRequest.css'

const FriendRequest = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async() => {
        const data = await fetch(
            'https://randomuser.me/api/?nat=us&randomapi&results=5'
        );

        const items = await data.json();
        setItems(items.results);
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
                        key={item.login.username}
                        date={formatDate(item.registered.date)}
                        name={item.login.username}
                        text={item.location.timezone.description}
                        show_acc={1}
                    />
                ))}

            </Grid>
        </div>
    )

}

export default FriendRequest;