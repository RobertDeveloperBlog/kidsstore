import React from 'react';
import Card from '../../card/Card'
import { Input } from '@mantine/core';
import ButtonModal from '../../modal/ButtonModal';
import "./OrderPage.css"


const OrderPage = () => {
  return (
    <Card>
      <h1 style={{textAlign: "center"}}>Оформление заказа</h1>
      <div className="inputs-container">
        <Input className="inputs" placeholder="Ваше ФИО: " />
        <Input className="inputs" placeholder="Адрес доставки: " />
        <Input className="inputs" placeholder="Телефон: " />
      </div>
      <ButtonModal color="yellow" text="Заказать" position="left"/>
    </Card>
  );
};

export default OrderPage;