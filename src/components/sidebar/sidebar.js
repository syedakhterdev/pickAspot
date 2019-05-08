import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return ( 
        <aside className="sidebar">
            <nav className="navbar p-0 navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Make a Reservations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Current Reservations</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
     );
}
 
export default Sidebar;