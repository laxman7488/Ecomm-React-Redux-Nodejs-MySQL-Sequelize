import React, { useEffect, useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom';
import Banner from './Banner';
import BreadCrumb from './layout/Breadcrumb';
import Footer from './layout/Footer';
import Header from './layout/Header'

export default function Wrapper({ children }) {
  const page = useLocation();
  

  
  return (
    <>
      <Header />
      {
        page.pathname == '/' ? <Banner /> : <BreadCrumb />
      }
      {children}
      <Footer/>
    </>
  )
}
