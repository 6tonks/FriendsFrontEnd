import React from 'react';
import './ContactCards.css';
import { Avatar } from '@mui/material';

function ContactCards({ image, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }}  className="contact__avatar">
            <Avatar src={profileSrc} className="profile__picture" />
            <h4> {title} </h4>
        </div>
    );
}

export default ContactCards;