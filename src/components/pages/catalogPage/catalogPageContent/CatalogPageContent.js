import React from 'react';
import './CatalogPageContent.css'
import CatalogCard from '../catalogCard/CatalogCard'

const CatalogPageContent = () => {
    return (
        <div className="catalog-page-content">
            <h1>Каталог товаров</h1>
            <div className="catalog-page-cards">
                <CatalogCard className="catalog-card"/>
                <CatalogCard className="catalog-card"/>
                <CatalogCard className="catalog-card"/>
                <CatalogCard className="catalog-card"/>
                <CatalogCard className="catalog-card"/>
                <CatalogCard className="catalog-card"/>
                <CatalogCard className="catalog-card"/>
                <CatalogCard className="catalog-card"/>
            </div>
        </div>
    );
};

export default CatalogPageContent;