import React, {Suspense} from 'react';
import './App.css';
import {Paper} from "@mantine/core";
import Card from "./components/card/Card";
import MainPage from "./components/pages/mainPage/MainPage";
import Header from "./components/header/Header";
import {Link, Route, Routes} from "react-router-dom";
import CatalogPage from "./components/pages/catalogPage/CatalogPage";

function App() {
  return (

        <Paper className="layout">
            <Header />
            <div className="body">
                <Suspense fallback={<div>Loading....</div>}>
                    <Routes>
                        <Route path={'/'} element={<MainPage />}/>
                        <Route path={'/catalog'} element={<CatalogPage />}/>
                    </Routes>
                </Suspense>

            </div>
        </Paper>
  );
}

export default App;
