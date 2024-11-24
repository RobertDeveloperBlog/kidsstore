import React, { useState, useEffect } from 'react';
import { Button } from "@mantine/core";
import './CatalogCard.css';

const CatalogCard = ({ name, imgUrl, price, setState, state, id }) => {
    const [value, setValue] = useState(0);

    // Синхронизация локального состояния с глобальным состоянием (state)
    useEffect(() => {
        const existingItem = state.find(item => item.id === id);
        if (existingItem) {
            setValue(existingItem.counter);
        }
        else {
            setValue(0)
        }
    }, [state, id]);

    const handleDecrement = () => {
        if (value > 0) {

            const updatedState = state.map(item =>
                item.id === id ? { ...item, counter: item.counter - 1 } : item
            ).filter(item => item.counter > 0); // Удаляем элемент, если счетчик стал 0
            setState(updatedState);
        }
    };

    const handleIncrement = () => {
        const updatedState = state.map(item =>
            item.id === id ? { ...item, counter: item.counter + 1 } : item
        );
        setState(updatedState);
    };

    const addItem = () => {
        if (!state.find(item => item.id === id)) {
            const newItem = { name, counter: 1, id, price };
            setState([...state, newItem]);
        } else {
            handleIncrement();
        }
    };

    return (
        <div className="catalog-card">
            <div className="card-img">
                <img alt={name} src={imgUrl} style={{ width: "225px", height: "225px" }} />
            </div>
            <div className="card-name-container">
                <div className="card-name">{name}</div>
            </div>
            <div className="card-price-container">
                <div className="card-price">{price}</div>
            </div>
            {!Boolean(value) && (
                <Button className="card-btn" color="dark" onClick={addItem}>
                    В корзину
                </Button>
            )}

            {Boolean(value) && (
                <>
                    <div className="card-btn-changed">
                        <Button className="card-btn-changed-minus" onClick={handleDecrement}>
                            -
                        </Button>
                        <div>{value}</div>
                        <Button className="card-btn-changed-plus" onClick={handleIncrement}>
                            +
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CatalogCard;