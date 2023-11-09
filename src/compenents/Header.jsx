import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Function to capitalize the first letter of the page name
  const formatPageName = (pageName) => {
    if (pageName === '/') return 'Home';
    return pageName.charAt(1).toUpperCase() + pageName.slice(2);
  };

  return (
    <header className="bg-black text-white mt-16 fixed w-full text-center">
      <h1 className="text-xl pb-1 mt-5 font-semibold">
        {formatPageName(location.pathname)}
      </h1>
    </header>
  );
};

export default Header;
