import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
