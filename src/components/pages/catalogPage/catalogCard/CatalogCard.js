import React, { useState } from 'react';
import {Button} from "@mantine/core";
import './CatalogCard.css'



const CatalogCard = () => {

    const [value, setValue] = useState(0);

    const handleDecrement = () => {
        setValue(value - 1)
        if (value === 0) {
            setValue(0)
        }
    }

    const handleIncrement = () => {
        setValue(value + 1)
    }

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

            {!Boolean(value) && <Button className="card-btn" color="dark" onClick={handleIncrement}>В корзину</Button>}

            {Boolean(value) && (
                <>
                    <Button disabled={true} className="card-btn" color="dark"
                            onClick={handleIncrement}>Добавлено</Button>
                    <div className="card-btn-changed">
                        <Button className="card-btn-changed-minus" onClick={handleDecrement}>-</Button>
                        <div>{value}</div>
                        <Button className="card-btn-changed-plus" onClick={handleIncrement}>+</Button>
                    </div>
                </>)
            }
        </div>
    );
};

export default CatalogCard;