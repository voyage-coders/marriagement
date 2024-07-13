import React from 'react';
import './Loading.css'; // Add your styles for the loader

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;