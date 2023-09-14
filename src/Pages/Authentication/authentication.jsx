import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/home';
import Detail from '../Detail/detail';
import NotFound from '../NotFound/notfound';
import Header from '../../Components/Global/Header/header';
import Footer from '../../Components/Global/Footer/footer';
import ROUTES from '../../Consts/routes';

const Authentication = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route>
        <Route path={ROUTES.home} element={<Home/>}/>
        <Route path={ROUTES.detail.path} element={<Detail/>}/>
        <Route path={ROUTES.notFound} element={<NotFound/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default Authentication;