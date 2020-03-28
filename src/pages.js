import React from 'react'
import { Switch, Route } from 'react-router-dom'
import route from './routes'
import { renderRoutes } from 'react-router-config'

// import Home from './Home/index'
// /**
//  * These are root pages
//  */
const Home = () => {
  return <h1 className="py-3">Home</h1>;
};

const Books = () => {
  return <h1 className="py-3">Books</h1>;
};

const Electronics = ({ route }) => {
  return (
    <div>
      <h1 className="py-3">Electronics</h1>
      {renderRoutes(route.routes)}
    </div>
  );
}

/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

export { Home, Books, Electronics, Mobile, Desktop, Laptop };
