import React from 'react';
import Card from '../../card/Card'
import ShopCartTable from './shopcarttable/ShopCartTable';
import Button from '../../button/LoginButton';


const ShoppingCart = ({state}) => {
    return (
        <Card>
            <ShopCartTable state={state} />
            <Button text="Заказать"/>
        </Card>
    );
};

export default ShoppingCart;