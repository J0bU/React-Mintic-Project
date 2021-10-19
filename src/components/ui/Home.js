import React from 'react';
import './Navbar';

export const Home = () => {
  return (
    <div className="container">
      <div className="header-home">
        <h1>Copa América</h1>
      </div>
      <div className="body-home">
        <img src="img/america.jpg" alt={'Copa américa'} />
      </div>
    </div>
  );
};
