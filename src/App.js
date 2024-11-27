import React, {Suspense, useState} from 'react';
import './App.css';
import {Paper} from "@mantine/core";
import MainPage from "./components/pages/mainPage/MainPage";
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import CatalogPage from "./components/pages/catalogPage/CatalogPage";
import ShoppingCart from "./components/pages/shopcartPage/ShoppingCart";
import OrderPage from "./components/pages/orderPage/OrderPage"
import Footer from "./components/footer/Footer"
import AboutUs from "./components/pages/aboutPage/AboutUs"

function App() {
    const [state, setState] = useState([])
  return (

        <Paper className="layout">
            <Header />
            <div className="body">
                <Suspense fallback={<div>Loading....</div>}>
                    <Routes>
                        <Route path={'/'} element={<MainPage />}/>
                        <Route path={'/catalog'} element={<CatalogPage state={state} setState={setState} />}/>
                        <Route path={"/shoppingcart"} element={<ShoppingCart state={state} />}/>
                        <Route path={"/ordering"} element={<OrderPage />}/>
                        <Route path={"/about"} element={<AboutUs />}/>
                    </Routes>
                </Suspense>
            </div>
          <Footer />
        </Paper>
  );
}

export default App


// Контекст сделать
// Контекст провайдер сделать