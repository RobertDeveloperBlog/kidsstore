import React, {useEffect, useState} from 'react';
import Card from '../../card/Card'
import CatalogCard from "./catalogCard/CatalogCard";
import "./CatalogPage.css"

const CatalogPage = ({state, setState}) => {
    console.log(state)

    const [data, setData] = useState([]);

    const getAllData = async () => {
        fetch('http://localhost:3000/api/v1/kidsstore').then((res) => {
            res.json().then(data => setData(data))
        })
    }

    useEffect(() => {
        getAllData()
    }, [])


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