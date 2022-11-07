import React, { useState } from 'react';
import './Header.scss';
import Home from './Home';
import Demo from './Demo';
import Websites from './Websites';
import Contacts from './Contacts';

function Header() {

  const [menuActive, setMenuActive] = useState('');
  const [pageSelector, setPageSelector] = useState('home');
  

  const toggleMenu = () => {
    menuActive === '' ? setMenuActive(' active') : setMenuActive('');
  }

  return (
    <>
      <section className={"showcase" + menuActive}>
        <header>
          <h2 className="logo">Vladimir Eremenko</h2>
          <div
            className={"toggle" + menuActive}
            onClick={toggleMenu}
          >
          </div>
        </header>
        <div className="overlay"></div>

        {pageSelector === 'home' && <Home />}
        {/* {pageSelector === 'demo' && <Demo />} */}
        {pageSelector === 'websites' && <Websites />}
        {pageSelector === 'contacts' && <Contacts />}


      </section>
      <div className="menu">
        <ul>
          <li><a href="#" onClick={() => {setPageSelector('home'); toggleMenu()}}>Home</a></li>
          {/* <li><a href="#" onClick={() => {setPageSelector('demo'); toggleMenu()}}>Demo</a></li> */}
          <li><a href="#" onClick={() => {setPageSelector('websites'); toggleMenu()}}>Projects</a></li>
          <li><a href="#" onClick={() => {setPageSelector('contacts'); toggleMenu()}}>Contacts</a></li>
        </ul>
      </div>
    </>
  );
}

export default Header;