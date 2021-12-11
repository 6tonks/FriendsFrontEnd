import { React, useState } from 'react';
import './ContactCards.css';
import { Avatar, Button } from '@mui/material';

function ContactCards({ id, image, profileSrc, title, subtitle }) {
    const [deleted, setDeleted] = useState(false);

    const deleteFriend = () => {
      const url = new URL("https://d2kjnw8vmxc1wq.cloudfront.net/api/friends/" + localStorage.getItem('user_id') + "/delete")
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ friend_id: id.toString() })
      };

      fetch(url, requestOptions).then(
        async function(data) {
          console.log(data.status)
          if (data.status >= 200 && data.status < 300) {
            setDeleted(true);
          } else {
            setDeleted(true);
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
                { !deleted &&
                    <Button variant="outlined" color="error" onClick={deleteFriend}>
                        Delete
                    </Button>
                }
            </div>
        </div>
    );
}

export default ContactCards;