import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RestaurantsPage() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        // Fetch all restaurants when the component is mounted
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('http://localhost:3001/restaurants');
                setRestaurants(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <div>
            <h1>Restaurants</h1>
            {restaurants.map(restaurant => (
                <div key={restaurant._id}>
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.description}</p>
                    <Link to={`/restaurants/${restaurant._id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

export default RestaurantsPage;
