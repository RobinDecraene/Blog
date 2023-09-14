import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Consts/routes';
import style from './detailCards.module.css';

const Detailcards = ({demoData}) => {
  if(!demoData) return '';
    else return (
        <Link to={`${ROUTES.detail.to}${demoData.id}`}>
        <section className={style.detailCard}>

        
            <div className={style.infoDetail}>
                <img src={demoData.image} alt="img" />
                <p className={style.titleDetail}>{demoData.title}</p>
                <p className={style.descriptionDetail}>{demoData.blog_paragrafe}</p>
                <p className={style.dateDetail}>{demoData.datum}</p>
            </div>
        </section>
    </Link>
    );
};

export default Detailcards;