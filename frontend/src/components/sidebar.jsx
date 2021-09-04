import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

    render() {
        return(
            <>
                <Link to="/">Notes</Link>
                <Link to="reminders">Reminders</Link>
                <Link to="archive">Archive</Link>
                <Link to="trash">Trash</Link>
            </>
        )
    }
}

export default Sidebar;