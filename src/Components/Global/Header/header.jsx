import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './header.module.css';
import ROUTES from '../../../Consts/routes';

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <nav>
        <div className={style.widthNav}>
        <Link to={ROUTES.home} className={location.pathname === ROUTES.home ? style.activeNav : ''}>Home</Link>
        <Link to={ROUTES.contact} className={location.pathname === ROUTES.contact ? style.activeNav : ''}>Contact</Link>
        </div>

      </nav>

    </header>
  );
};

export default Header;