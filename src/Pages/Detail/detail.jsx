import React, { useEffect, useState } from 'react';
import { redirect, useParams } from 'react-router-dom';
import style from './detail.module.css';
import Loading from '../../Components/Global/Loading/loading';
import ROUTES from '../../Consts/routes';
import Detailcards from '../../Components/Detail/Cards/detailCards';

const Detail = () => {
  const [demoData, setdemoData] = useState(false)
  const { id } = useParams();

  useEffect(() => {
      let isActive = true;
  
        if(!demoData){
          fetch("../barcelonaBlog.json")
          .then(response => response.json())
          .then(response => {
            if(isActive) {
                  setdemoData(response.filter(id => id)[0])
              }
          })
        }
  
        return () => isActive = false;
    }, [])


  if(!demoData) return <Loading/>
  else return (
      <div>

          <Detailcards demoData={demoData}/>
          
      </div>
  );
};

export default Detail;