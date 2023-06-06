import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3001/profile', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProfile();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <h2>{user.username}</h2>
            <h3>Your Restaurants</h3>
            {user.restaurants.map((restaurant) => (
                <div key={restaurant._id}>
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProfilePage;
