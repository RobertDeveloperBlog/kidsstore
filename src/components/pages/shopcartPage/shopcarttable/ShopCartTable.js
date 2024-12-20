import React from 'react';
import { Table } from '@mantine/core'


const ShopCartTable = ({state}) => {

    // const elements = [
    //     { name: 'Плюшевый медведь', price: '1499', count: '1' },
    //     { name: 'Орел', price: '2500', count: '2' },
    //     { name: 'Машинка', price: '1200', count: '3' },
    //   ];

      const rows = state.map((element) => (
        <tr key={element.counter}>
          <td>{element.name}</td>
          <td>{element.counter}</td>
          <td>{element.price}</td>
          <td>{element.price * element.counter}</td>
        </tr>
      ));

    return (
    <Table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Количество</th>
            <th>Цена за товар</th>
            <th>Итоговая цена</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
    </Table>
    );
};

export default ShopCartTable;