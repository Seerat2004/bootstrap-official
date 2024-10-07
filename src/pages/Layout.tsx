import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import Navbar from '@/components/Navbar';

const Footer = () => {
  return (
    <footer style={{ padding: '1rem', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
  );
};

const Layout: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;