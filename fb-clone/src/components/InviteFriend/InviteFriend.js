// import React from "react";
// import {Grid} from "@mui/material";


// const InviteFriend = () => {
//     return (
//         <Grid container direction="column">
//             <Grid item  container>
//                 <Grid item container xs={12} sm={8}>
//                     <h1>Invite Friend Page Placeholder!</h1>
//                 </Grid>
//                 <Grid item xs={false} sm={2}/>
//             </Grid>
//         </Grid>
//     );
// };

// export default InviteFriend;

import {Grid} from '@mui/material';
import React, {useState, useEffect} from 'react';
import RequestCard from '../RequestCard';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import './InviteFriend.css'

const InviteFriend = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async() => {
        const data = await fetch(
            'https://randomuser.me/api/?nat=us&randomapi&results=2'
        );

        const items = await data.json();
        setItems(items.results);
    };

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    };

    return (
        <div className="friend__invite">
            <Grid item container spacing={1} xs={12}>
                <div className="friend__input">
                    <PersonSearchIcon />
                    <input placeholder="Search New Friend" type="text" />
                </div>
                <IconButton size='big' color="default" aria-label="Add another request">
                    <AddIcon/>
                </IconButton>

                {items.map(item => (
                    <RequestCard 
                        key={item.login.username}
                        date={formatDate(item.registered.date)}
                        name={item.login.username}
                    />
                ))}

            </Grid>
        </div>
    )

}

export default InviteFriend;