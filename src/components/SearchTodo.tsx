import React, { useState } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';

// const { Search } = Input;

interface TodoAddprops {
  handleClickAdd: (value: string) => void;
}

type LayoutType = Parameters<typeof Form>[0]['layout'];

const SearchTodo: React.FC<TodoAddprops> = ({ handleClickAdd }) => {
  const [form] = Form.useForm();

  const onSubmit = (values: { title: string }) => {
    handleClickAdd(values.title);
  };

  // const onSearch = () => {

  // };

  return (
    <>
      <Form
        onFinish={onSubmit}
        form={form}
        className='my-5 p-1.5'
      >
        <Form.Item name='title'>
          <Input placeholder='Search todo list...' />
        </Form.Item>
        <Button type='primary' htmlType='submit' block>
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchTodo;
