import React from 'react';
import SidebarRow from './SidebarRow/SidebarRow';
import './Sidebar.css';

import PeopleIcon from '@mui/icons-material/People';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={PeopleIcon} title="All Friends" />
            <SidebarRow Icon={AddReactionIcon} title="Incoming Requests" />
            <SidebarRow Icon={ConnectWithoutContactIcon} title="Outgoing Invite" />
        </div>
    );
}

export default Sidebar;