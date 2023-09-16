import React from 'react';
import style from './detailCards.module.css';

const Detailcards = ({demoData}) => {

  if(!demoData) return '';
    else return (
        <section className={style.detailCard}>
            <div className={style.infoDetail}>
                <img className={style.imgDetail} src={demoData.image} alt="img" />
                <div className={style.tekstDetail}>
                    <p className={style.titleDetail}>{demoData.title}</p>
                    <p className={style.descriptionDetail}>{demoData.blog_paragrafe}</p>
                    <p className={style.dateDetail}>{demoData.datum}</p>
                </div>
                
            </div>
        </section>
    
    );
};

export default Detailcards;