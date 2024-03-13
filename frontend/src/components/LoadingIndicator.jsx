import React from 'react';
import '../styles/LoadingIndicator.css'; // Make sure to create this CSS file in the same directory

const LoadingIndicator = () => (
    <div className="loader-container">
        <div className="loader"></div>
    </div>
);

export default LoadingIndicator;