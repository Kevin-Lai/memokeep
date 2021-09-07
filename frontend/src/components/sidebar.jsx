import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css';

class Sidebar extends React.Component {

    render() {
        return(
            <div className="sidebar-block">
                <div className="sidebar-list">
                    <Link to="/">Notes</Link>
                    <Link to="reminders">Reminders</Link>
                    <Link to="archive">Archive</Link>
                    <Link to="trash">Trash</Link>
                </div>
            </div>
        )
    }
}

export default Sidebar;