import React from 'react';
import {Button} from "@mantine/core";
import './CatalogCard.css'

const CatalogCard = () => {
    return (
        <div className="catalog-card">
            <div className="card-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBXMHOxLn5-BQnjjpOfzyHDF9zU1efW97lcg&s"
                     alt="CatalogCard" style={{width: "225px", height: "225px"}}/>
            </div>
            <div className="card-name-container">
                <div className="card-name">Плюшевый медведь</div>
            </div>
            <div className="card-price-container">
                <div className="card-price">1499 ₽</div>
            </div>
            <Button className="card-btn" color="dark">В корзину</Button>
        </div>
    );
};

export default CatalogCard;