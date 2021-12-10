import React from 'react';
import SidebarRow from './SidebarRow/SidebarRow';
import './SidebarMoney.css';
import {Link} from 'react-router-dom';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

function SidebarMoney() {
    return (
        <div className="sidebar">
            <Link to="/money" className="hyperlink__style">
                <SidebarRow Icon={AttachMoneyIcon} title="Current Account Balance" />
            </Link>
            <Link to="/portfolio" className="hyperlink__style">
                <SidebarRow Icon={ConnectWithoutContactIcon} title="My Portfolio" />
            </Link>
            <Link to="/transactions" className="hyperlink__style">
                <SidebarRow Icon={ConnectWithoutContactIcon} title="Buy or Sell Stocks" />
            </Link>

        </div>
    );
}

export default SidebarMoney;