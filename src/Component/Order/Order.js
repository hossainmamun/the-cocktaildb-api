import React from 'react';
import Navbar from '../Shared/Navbar/Navbar.js';

const Order = () => {
    return (
        <div>
            <div style={{ background: '#073b4c', height: '80px' }}>
                <Navbar />
            </div>
            <div className="text-center mt-5">
                <h2 className="text-capitalize">thanks for order</h2>
                <h5>mod khaaa, mod khaaa, mod khaaa....</h5>
            </div>
        </div>
    );
};

export default Order;