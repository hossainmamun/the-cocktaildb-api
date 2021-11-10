import React from 'react';
import '../../App.scss'

const ErrorPage = () => {
    return (
        <div className="error-page">
            <div className="error-content">
                <img src="https://i.ibb.co/4P3LJf4/11-110262-sad-emoji-png-clipart-sad-emoji.jpg" alt="img" />
                <h2>page not found</h2>
                <p>404 invalid route name try again</p>
            </div>
        </div>
    );
};

export default ErrorPage;