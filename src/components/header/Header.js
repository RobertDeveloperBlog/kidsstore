import React from 'react';
import './Header.css'
import ButtonModal from "../modal/ButtonModal";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <a href="http://localhost:3001" style={{textDecoration: "none"}}><h1 className="titleStyles">Магазин детских игрушек</h1></a>
            <nav className="navStyles">
                <Link to={'/catalog'} className="linkStyles">Каталог товаров</Link>
                <Link to={'/shoppingcart'} className="linkStyles">Корзина</Link>
                <Link to={'/ordering'} className="linkStyles">Оформление заказа</Link>
                <Link to={'/about'} className="linkStyles">О нас</Link>

            </nav>
            <div className="buttons">
                <ButtonModal text="Log in" color="dark" title="Авторизация:" position="center"/>
                <ButtonModal text="Sign Up" color="blue" title="Регистрация:" position="center"/>
            </div>

        </div>
    );
};

export default Header;