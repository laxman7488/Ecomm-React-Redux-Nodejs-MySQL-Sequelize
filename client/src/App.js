import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Wrapper from "./component/Wrapper";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import { routes } from "./routes";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={routes.home.path} element={<Wrapper><Home/></Wrapper>} />
      <Route path={routes.shop.path} element={<Wrapper><Shop/></Wrapper>} />
      <Route path={routes.shopDetail.path} element={<Wrapper><Shop/></Wrapper>} />
      <Route path={routes.cart.path} element={<Wrapper><Cart/></Wrapper>} />
      <Route path={routes.thankYou.path} element={<Wrapper><ThankYou/></Wrapper>} />
      <Route path={routes.contact.path} element={<Wrapper><Contact/></Wrapper>}/>
      <Route path={routes.notFound.path} element={<Wrapper><NotFound/></Wrapper>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
