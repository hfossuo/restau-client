import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import HomePage from './components/HomePage';
import CheckoutForm from './components/CheckoutForm';
import RestaurantPage from './components/RestaurantsPage';
import ProfilePage from './components/ProfilePage';
import CreateRestaurant from './components/CreateRestaurant';
import NavBar from './components/NavBar';

// Load Stripe.js as early as possible to reduce latency
// Your Stripe publishable API key goes here
const stripePromise = loadStripe('your_stripe_public_api_key');

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                } />
                <Route path="/restaurant/:id" element={<RestaurantPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/create-restaurant" element={<CreateRestaurant />} />
                {/* Add your other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
