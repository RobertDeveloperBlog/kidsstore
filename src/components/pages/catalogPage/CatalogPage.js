import React from 'react';
import Card from '../../card/Card'
import CatalogCard from "./catalogCard/CatalogCard";
import "./catalogPageContent/CatalogPageContent.css"

const CatalogPage = ({state, setState}) => {
    console.log(state)
    const data = [
        {
            id: 1,
            name: 'Плюшевый медведь',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBXMHOxLn5-BQnjjpOfzyHDF9zU1efW97lcg&s',
            price: '1499'
        },
        {
            id: 2,
            name: 'Конструктор LEGO',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Z67v_fuzlyozDaI4y68IpoC8Kf9WZZG4ew&s',
            price: '3599'
        },
        {
            id: 3,
            name: 'Радиоуправляемая машина',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbDe7-Tdm-Mp6vX5KKXgI-wumxxCZgrcMQw&s',
            price: '2599'
        },
        {
            id: 4,
            name: 'Настольная игра Монополия',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbA7rgAv3xyFW8U3M0HoFYIzxXjEwBZ8I5hA&s',
            price: '1999'
        },
        {
            id: 5,
            name: 'Кукла Барби',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGTGWhwHOqsFOahEdjYoTCRW02n9YH8C0tw&s',
            price: '1699'
        }
    ]

    console.log(state)
    return (
        <Card>
            <div className="catalog-page-content">
                <h1>Состояние</h1>
                <h1>Каталог товаров</h1>
                <div className="catalog-page-cards">
                    {data.map(item => <CatalogCard key={item.id} name={item.name} imgUrl={item.imgUrl} price={item.price} setState={setState} state={state} id={item.id} />)}
                </div>
            </div>
        </Card>
    );
};

export default CatalogPage;