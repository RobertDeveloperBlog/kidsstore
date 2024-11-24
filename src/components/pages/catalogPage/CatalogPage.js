import React from 'react';
import Card from '../../card/Card'
import CatalogCard from "./catalogCard/CatalogCard";
import "./CatalogPage.css"

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
            imgUrl: 'https://bi.ua/uploaded-images/products/size_650/588773_1.jpg',
            price: '3599'
        },
        {
            id: 3,
            name: 'Радиоуправляемая машина',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdcIgE47cRwvStct5gvKl9C8Oxpcl60Erbw&s',
            price: '2599'
        },
        {
            id: 4,
            name: 'Настольная игра Монополия',
            imgUrl: 'https://static.richfamily.ru/photo/29/00/290070/1.webp',
            price: '1999'
        },
        {
            id: 5,
            name: 'Кукла Барби',
            imgUrl: 'https://lemikids.ru/upload/iblock/7cd/7cd7f55fc498fa13805a96f5ed96d4dd.jpg',
            price: '1699'
        },
        {
            id: 6,
            name: 'Детский велосипед',
            imgUrl: 'https://velomarket31.ru/image/cache/catalog/i/nd/op/7e52665a06b10d31322b2d132de1d32e-1000x1000.jpg',
            price: '4599'
        },
        {
            id: 7,
            name: 'Пазл 1000 элементов',
            imgUrl: 'https://ir.ozone.ru/s3/multimedia-2/c1000/6653054090.jpg',
            price: '899'
        },
        {
            id: 8,
            name: 'Мягкая игрушка Слонёнок',
            imgUrl: 'https://basket-12.wbbasket.ru/vol1740/part174053/174053030/images/big/1.webp',
            price: '1299'
        }
    ];


    console.log(state)
    return (
        <Card>
            <div className="catalog-page-content">
                <h1>Каталог товаров</h1>
                <div className="catalog-page-cards">
                    {data.map(item => <CatalogCard key={item.id} name={item.name} imgUrl={item.imgUrl} price={item.price} setState={setState} state={state} id={item.id} />)}
                </div>
            </div>
        </Card>
    );
};

export default CatalogPage;