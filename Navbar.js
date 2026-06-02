import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          SB Stocks
        </Link>

        <div>

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/stocks">
                Stocks
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                Orders
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;