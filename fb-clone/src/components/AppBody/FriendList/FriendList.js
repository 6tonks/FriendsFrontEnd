import React from 'react';
import ContactCards from './ContactCards';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import './FriendList.css'

const FriendList = () => {
    return (
        <div className="friend__list">
            <div className="friend__input">
                <PersonSearchIcon />
                <input placeholder="Filter Friend" type="text" />
            </div>
            <div>
                <ContactCards />
            </div>
        </div>
    );
  }
  
  export default FriendList;