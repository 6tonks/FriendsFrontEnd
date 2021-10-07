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
            <div className="friend__list__feed">
                <div className="friend__list__grid">
                    {/* Need to add how to make cards dynamic based on API call */}
                    <ContactCards 
                        image=""
                        profileSrc=""
                        title="friend_acc"
                    />
                    <ContactCards 
                        image=""
                        profileSrc=""
                        title="friend_acc"
                    />
                    <ContactCards 
                        image=""
                        profileSrc=""
                        title="friend_acc"
                    />
                    <ContactCards 
                        image=""
                        profileSrc=""
                        title="friend_acc"
                    />
                    <ContactCards 
                        image=""
                        profileSrc=""
                        title="friend_acc"
                    />
                    <ContactCards 
                        image=""
                        profileSrc=""
                        title="friend_acc"
                    />
                    <ContactCards 
                        image=""
                        profileSrc=""
                        title="friend_acc"
                    />
                    <ContactCards 
                        image=""
                        profileSrc=""
                        title="friend_acc"
                    />
                    <ContactCards 
                        image=""
                        profileSrc=""
                        title="friend_acc"
                    />
                    <ContactCards 
                        image=""
                        profileSrc=""
                        title="friend_acc"
                    />
                </div>
            </div>
        </div>
    );
  }
  
  export default FriendList;