import React, {Suspense, useState} from 'react';
import './App.css';
import {Paper} from "@mantine/core";
import Card from "./components/card/Card";
import MainPage from "./components/pages/mainPage/MainPage";
import Header from "./components/header/Header";
import {Link, Route, Routes} from "react-router-dom";
import CatalogPage from "./components/pages/catalogPage/CatalogPage";
import ShoppingCart from "./components/pages/shopcartPage/ShoppingCart";

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
                    </Routes>
                </Suspense>

            </div>
        </Paper>
  );
}

export default App


// Контекст сделать
// Контекст провайдер сделать