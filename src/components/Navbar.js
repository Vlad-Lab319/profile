import './Navbar.scss';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

  return (
    <nav className="navbar">
      Navbar
      <MenuIcon />
      <ul>
        <li>
          <a href="">About me</a>
          <ul>
            <li>
              <a href="">Stack</a>
            </li>
            <li>
              <a href="">Certificates</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Projects</a>
            </li>
            <li>

            </li>
          </ul>
        </li>
        <li>
          <a href="">Contact me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;