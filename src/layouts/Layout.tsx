import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

type Ilayout = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title = 'this is default title' }: Ilayout) => {
  return (
    <>
      <div>
        <Navbar />
        <Header title={title} />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
