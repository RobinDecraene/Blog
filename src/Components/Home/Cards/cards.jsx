import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Consts/routes';
import style from './cards.module.css';

const Cards = ({demoData}) => {
  if(!demoData) return '';
    else return (
        <Link to={`${ROUTES.detail.to}${demoData.id}`}>
        <section className={style.card}>

          <img src={demoData.image} alt="img" />
            <div>
                <p className={style.title}>{demoData.title}</p>
                <p className={style.descriptionCard}>{demoData.blog_paragrafe_small}</p>
                <p className={style.date}>{demoData.datum}</p>
            </div>
        </section>
    </Link>
    );
};

export default Cards;