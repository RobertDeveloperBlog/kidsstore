import React from 'react';
import Card from '../../card/Card'
import ShopCartTable from './shopcarttable/ShopCartTable';
import {Button} from "@mantine/core";
import { useNavigate }  from 'react-router-dom';

const ShoppingCart = ({state}) => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/ordering');
  }

    return (
        <Card>
            <ShopCartTable state={state} />
            <Button onClick={handleOrderClick}>Заказать</Button>
        </Card>
    );
};

export default ShoppingCart;