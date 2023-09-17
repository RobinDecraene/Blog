import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './detailCards.module.css';
import Loading from '../../Global/Loading/loading';

const Detailcards = () => {
  const { id } = useParams();
  const [demoData, setDemoData] = useState(null);

  useEffect(() => {
    const fetchDemoData = async () => {
      
        const response = await fetch('../barcelonaBlog.json');
        const data = await response.json();
        const parsedId = parseInt(id, 10);
        const detailItem = data.find((item) => item.id === parsedId);
        setDemoData(detailItem);
    };

    fetchDemoData();
  }, [id]);

  if (!demoData) return (<Loading/>);

  return (
    <section className={style.detailCard}>
        <img className={style.imgDetail} src={demoData.image} alt="img" />
        <div className={style.tekstDetail}>
          <p className={style.titleDetail}>{demoData.title}</p>
          <p className={style.descriptionDetail}>{demoData.blog_paragrafe}</p>
          <p className={style.dateDetail}>{demoData.datum}</p>
        </div>
      
    </section>
  );
};

export default Detailcards;
