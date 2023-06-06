import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/restaurants">Restaurants</Link>
            <Link to="/create-restaurant">Create Restaurant</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    );
}

export default NavBar;
