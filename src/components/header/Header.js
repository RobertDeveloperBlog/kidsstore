import React from 'react';
import './Header.css'
import {Button} from "@mantine/core";
import LoginModal from "../modal/LoginModal";

const Header = () => {
    return (
        <div className="header">
            <a href="http://localhost:3000" style={{textDecoration: "none"}}><h1 className="titleStyles">Магазин детских игрушек</h1></a>
            <nav className="navStyles">
                <a href="catalog" className="linkStyles">Каталог товаров</a>
                <a href="cart" className="linkStyles">Корзина</a>
                <a href="checkout" className="linkStyles">Оформление заказа</a>
            </nav>
            <div className="buttons">
                <LoginModal/>
                <Button className="btn-sign">Sign up</Button>
            </div>

        </div>
    );
};

export default Header;