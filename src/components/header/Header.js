import React from 'react';
import './Header.css'
import {Button} from "@mantine/core";
import LoginModal from "../modal/LoginModal";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <a href="http://localhost:3000" style={{textDecoration: "none"}}><h1 className="titleStyles">Магазин детских игрушек</h1></a>
            <nav className="navStyles">
                <Link to={'/catalog'} className="linkStyles">Каталог товаров</Link>
                <Link to={'/shoppingcart'} className="linkStyles">Корзина</Link>
                <Link to={'/ordering'} className="linkStyles">Оформление заказа</Link>
                <Link to={'/about'} className="linkStyles">О нас</Link>

            </nav>
            <div className="buttons">
                <LoginModal/>
                <Button className="btn-sign">Sign up</Button>
            </div>

        </div>
    );
};

export default Header;