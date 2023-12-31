import React from 'react';
import { useEffect, useState } from 'react';
import style from './home.module.css';
import Loading from '../../Components/Global/Loading/loading';
import Cards from '../../Components/Home/Cards/cards';

const Home = () => {
  const [demoData, setdemoData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [formData, setFormdata] = useState("");

  const filter = () => {
    let dataCopy = structuredClone(demoData);
    dataCopy = dataCopy.filter(dataItem => dataItem.name.toLowerCase().includes(formData.toLocaleLowerCase()));
    setFilteredData(dataCopy)
  }

  useEffect(() => {
    let isActive = true;

      if(!demoData){
        fetch("./barcelonaBlog.json")
        .then(response => response.json())
        .then(response => {
          if(isActive) {
            setdemoData(response);
            setFilteredData(response);
          }
        })
      }

      return () => isActive = false;
  }, [])

  useEffect(() => {
    if(demoData)filter();

  }, [formData])


  if(!demoData)
    return (<Loading/>)
  else return (
    <main>

      <section className={style.cards}>

        {filteredData.map((demo, index) => {
          return (<Cards key={index} demoData={demo}/>)
        })}
      </section>
    </main>
  );
};

export default Home;