import React from 'react';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import UserInfoForm from '../../components/forms/UserInfoForm';

function HomePage() {
  return (
    <div>
      <Header />
      <h2>Welcome to the Home Page</h2>
      <UserInfoForm />
      <Footer />
    </div>
  );
}

export default HomePage;
