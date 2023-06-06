import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        // Fetch the featured restaurants when the component is mounted
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('http://localhost:3001/restaurants/featured');
                setRestaurants(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <div>
            <h1>Welcome to MERN Restaurants!</h1>
            <h2>Featured Restaurants</h2>
            {restaurants.map(restaurant => (
                <div key={restaurant._id}>
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.description}</p>
                </div>
            ))}
        </div>
    );
}

export default HomePage;
