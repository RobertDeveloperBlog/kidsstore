import React, {Suspense} from 'react';
import './App.css';
import {Paper} from "@mantine/core";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import {Link, Route, Routes} from "react-router-dom";

function App() {
  return (

        <Paper className="layout">
            <Header />
            <div className="body">
                <Link to={'/'}>Главная страница</Link>
                <Link to={'/about'}>Информация о сайте</Link>
                <Suspense fallback={<div>Loading....</div>}>
                    <Routes>
                        <Route path={'/'} element={<div>Привет</div>}/>
                        <Route path={'/about'} element={<div></div>}/>
                    </Routes>
                </Suspense>

            </div>
        </Paper>
  );
}

export default App;
