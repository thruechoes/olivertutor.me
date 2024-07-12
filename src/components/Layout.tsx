import React, { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <NavBar />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </div>
);

export default Layout;
