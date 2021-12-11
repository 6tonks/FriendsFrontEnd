import React, { useState } from 'react';
import './UserCards.css';
import { Avatar, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function UserCards({ id, image, profileSrc, title, subtitle, isFriend }) {
    const [added, setAdded] = useState(false);

    const addFriend = () => {
      const url = new URL("https://z4sr5g47u6.execute-api.us-east-1.amazonaws.com/api/friends/" + localStorage.getItem('user_id') + "/add")
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ friend_id: id.toString() })
      };

      fetch(url, requestOptions).then(
        async function(data) {
          console.log(data.status)
          if (data.status >= 200 && data.status < 300) {
            setAdded(true);
          } else {
            setAdded(true);
            alert("There is an error in processing the request, please try again!");
          }
        }
      );
    }

    return (
        <div style={{ backgroundImage: `url(${image})` }}  className="contact__avatar">
            <Avatar src={profileSrc} className="profile__picture" />
            <h4> {title} </h4>
            <h5> {subtitle} </h5>
            <div>
                {!isFriend && !added && 
                    <Fab color="primary" aria-label="add">
                        <AddIcon onClick={addFriend} />
                    </Fab>
                }
            </div>
        </div>
    );
}

export default UserCards;