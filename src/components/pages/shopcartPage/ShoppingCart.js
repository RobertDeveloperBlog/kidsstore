import React from 'react';
import Card from '../../card/Card'
import ShopCartTable from './shopcarttable/ShopCartTable';


const ShoppingCart = ({state}) => {
    return (
        <Card>
            <ShopCartTable state={state} />
        </Card>
    );
};

export default ShoppingCart;