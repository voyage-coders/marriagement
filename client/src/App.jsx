import React from 'react';
import { ServicesProvider } from './context/ServicesContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ServicesProvider>
      <AppRoutes />
    </ServicesProvider>
  );
}

export default App;
