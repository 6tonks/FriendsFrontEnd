import React from 'react';
import SidebarRow from './SidebarRow/SidebarRow';
import './SidebarMoney.css';
import {Link} from 'react-router-dom';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShowChartIcon from '@mui/icons-material/ShowChart';

function SidebarMoney() {
    return (
        <div className="sidebar">
            <Link to="/money" className="hyperlink__style">
                <SidebarRow Icon={AttachMoneyIcon} title="Current Account Balance" />
            </Link>
            <Link to="/porto" className="hyperlink__style">
                <SidebarRow Icon={ShowChartIcon} title="Stock Portfolio" />
            </Link>
        </div>
    );
}

export default SidebarMoney;