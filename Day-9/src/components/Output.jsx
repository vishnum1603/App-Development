import React, { useState } from 'react';
import { Table, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import example from '../perfumes.jpeg';
import SelectFlavours from './SelectFlavours';

const { Meta } = Card;
const { Title, Text } = Typography;
const columns = [
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text) => `$${text.toFixed(2)}`,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: (text) => `$${text.toFixed(2)}`,
  },
];

const data = [
  {
    key: '1',
    item: 'Product A',
    quantity: 2,
    price: 10.0,
    total: 20.0,
  },
  {
    key: '2',
    item: 'Product B',
    quantity: 1,
    price: 15.0,
    total: 15.0,
  },
  {
    key: '3',
    item: 'Product C',
    quantity: 3,
    price: 8.0,
    total: 24.0,
  },
];


const total = data.reduce((acc, current) => acc + current.total, 0);

const Output = () => {
  const navigate = useNavigate() ;
  const [showSelectFlavors, setShowSelectFlavors] = useState(false);
  
  const handleBuyNow = () => {
    console.log('BUY NOW button clicked');
  };
  
  const handleAdd = () => {
    setShowSelectFlavors(true);
  };
  
  return (
    <div>
      {!showSelectFlavors ? (
        <Card
        hoverable
        style={{
          width: 240,
          }}
          cover={<img alt="example" src={example} />}
          >
          <Button
            type="primary"
            style={{ marginTop: '16px', marginLeft: '300px' }}
            onClick={handleAdd}
          >
            ADD
          </Button>
          <Meta title="Customize Perfume" />
        </Card>
      ) : (
        <SelectFlavours />
      )}
      {!showSelectFlavors && (
        <div>
          <Title level={2}>Bill Statement</Title>
          <Table columns={columns} dataSource={data} pagination={false} />
          <div style={{ marginTop: '16px' }}>
            <Text strong>Total:</Text>
            <Text strong style={{ marginLeft: '8px' }}>
              ${total.toFixed(2)}
            </Text>
          </div>
        </div>
      )}
      {!showSelectFlavors && (
        <Button type="primary" style={{ marginTop: '16px' }} onClick={() => navigate("/checkout")}>
          BUY NOW
        </Button>
      )}
    </div>
  );
};

export default Output;
