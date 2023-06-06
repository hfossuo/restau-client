import React, { useState } from 'react';
import axios from 'axios';

function CreateRestaurant() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3001/restaurants', {
                name: name,
                description: description,
                location: location
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            alert('Restaurant created successfully');
        } catch (err) {
            alert('Failed to create restaurant');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} required />
            </label>
            <label>
                Location:
                <input type="text" value={location} onChange={e => setLocation(e.target.value)} required />
            </label>
            <button type="submit">Create</button>
        </form>
    );
}

export default CreateRestaurant;
