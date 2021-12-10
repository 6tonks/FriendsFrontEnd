import React from 'react';
import './ContactCards.css';
import { Avatar } from '@mui/material';

function ContactCards({ id, image, profileSrc, title, subtitle }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }}  className="contact__avatar">
            <Avatar src={profileSrc} className="profile__picture" />
            <h4> {title} </h4>
            <h5> {subtitle} </h5>
        </div>
    );
}

export default ContactCards;