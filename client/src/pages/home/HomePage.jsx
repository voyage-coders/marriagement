import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import UserInfoForm from '../forms/UserInfoForm'; // Import the form

function HomePage() {
  return (
    <div>
      <Header />
      <h2>Welcome to the Home Page</h2>
      <UserInfoForm /> {/* Include the form */}
      <Footer />
    </div>
  );
}

export default HomePage;
