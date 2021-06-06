import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onLogout = () => {
    window.localStorage.clear()
    window.location.reload()
  };

  return (
    <>
      <div className='navbar'>
        <div className="sidebar_icon">
          <Sidebar />
        </div>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          REP1ER
          {/* <i className='fab fa-firstdraft' /> */}
        </Link>
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <div className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              HOME
            </Link>
          </div>
          <div
            className='nav-item'>
            <Link
              to='/SellShirts'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              SELL SHIRTS <i className='fas fa-caret-down' />
            </Link>

          </div>
          <div className='nav-item'>
            <Link
              to='/ContactUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
          </div>
          {/* <div className='nav-item'>
            <Link
              to='/MyAccount'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              MY ACCOUNT
            </Link>
          </div> */}

        </div>


        {!localStorage.getItem("name") &&
          <div className='nav-log'>

            <Link
              to='/Login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              LOGIN
            </Link>
          </div>
        }
        {!localStorage.getItem("name") &&
          <div className='nav-log'>
            <Link
              to='/Register'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              REGISTER
            </Link>
          </div>
        }

        {localStorage.getItem("name") &&
          <div className='nav-log'>

            <Link
              to='/'
              className='nav-links'
              onClick={onLogout}
            >
              LOGOUT
            </Link>
          </div>
        }

      </div>
    </>
  );
}

export default Navbar;
