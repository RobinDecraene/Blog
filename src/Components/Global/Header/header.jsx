import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import ROUTES from '../../../Consts/routes';

const Header = () => {
  return (
    <header>
      <nav>
        <div className={style.widthNav}>
          <a href="home"><Link to={ROUTES.home}>Home</Link></a>
          <a href="contact"><Link to={ROUTES.contact}>Contact</Link></a>
        </div>

      </nav>

    </header>
  );
};

export default Header;