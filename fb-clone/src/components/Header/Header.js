import React, {useState, useEffect} from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCirceIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';


function Header() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [firstName, setFirstName] = useState([]);
    const [lastName, setLastName] = useState([]);

    const fetchItems = async() => {
        setFirstName(localStorage.getItem("first_name"));
        setLastName(localStorage.getItem("last_name"));
    };

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload(false);
    };

    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Stonks!" type="text" />
                </div>
            </div>
            <div className="header__center">
                <Link to="/" className="hyperlink__style">
                    <div className="header__option">
                        <HomeIcon fontSize="large" />
                    </div>
                </Link>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <Link to="/money" className="hyperlink__style">
                    <div className="header__option">
                        <StorefrontOutlinedIcon fontSize="large" />
                    </div>
                </Link>
                <Link to="/friends" className="hyperlink__style">
                    <div className="header__option">
                        <SupervisedUserCirceIcon fontSize="large" />
                    </div>
                </Link>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4> {firstName + " " + lastName} </h4>
                    <Link to="/">
                        <Button onClick={logout}>
                            LOGOUT
                        </Button>
                    </Link>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;