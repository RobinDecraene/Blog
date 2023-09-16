import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Consts/routes';
import style from './cards.module.css';

const Cards = ({demoData}) => {
if(!demoData) return '';
else return (

  <Link className={style.card} to={`${ROUTES.detail.to}${demoData.id}`}>

    <img src={demoData.image} alt="img" />
    <div>
      <p className={style.title}>{demoData.title}</p>
      <p className={style.descriptionCard}>{demoData.blog_paragrafe.slice(0, 100)}...</p>
      <p className={style.date}>{demoData.datum}</p>
    </div>
  </Link>

);
};

export default Cards;