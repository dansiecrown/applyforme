import React from 'react';
import classes from './DashboardSidebar.module.css';
;
import Menu from "../../assets/images/menu.svg";


export default function DashboardSidebarMobile() {
    return (
        <div className={classes.header_mobile}>
            <div>
                <img src={Menu} alt="Menu icon" />
            </div>
        </div>
    )
}
