import React from 'react';
import SidebarRow from './SidebarRow/SidebarRow';
import './Sidebar.css';
import {Link} from 'react-router-dom';

import PeopleIcon from '@mui/icons-material/People';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/friends" className="hyperlink__style">
                <SidebarRow Icon={PeopleIcon} title="All Friends" />
            </Link>
            <Link to="/friends/requests" className="hyperlink__style">
                <SidebarRow Icon={AddReactionIcon} title="Incoming Requests" />
            </Link>
            <Link to="/friends/invite" className="hyperlink__style">
                <SidebarRow Icon={ConnectWithoutContactIcon} title="Outgoing Invite" />
            </Link>
            <Link to="/portfolio" className="hyperlink__style">
                <SidebarRow Icon={ConnectWithoutContactIcon} title="My Portfolio" />
            </Link>
        </div>
    );
}

export default Sidebar;