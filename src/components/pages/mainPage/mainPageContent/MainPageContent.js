import React from 'react';
import './MainPageContent.css'
import CardsCarousel from '../carousel/CardsCarousel';

const MainPageContent = () => {
    return (
        <div className="main-page-content">
            <h1 style={{padding: "20px"}}>Добро пожаловать на наш сайт!</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CardsCarousel/>
            </div>

        </div>
    );
};

export default MainPageContent;