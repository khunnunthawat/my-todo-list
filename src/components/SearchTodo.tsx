import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

// const { Search } = Input;

interface TodoAddprops {
  handleClickSearch: (value: string) => void;
}

type LayoutType = Parameters<typeof Form>[0]['layout'];

export const SearchTodo: React.FC<TodoAddprops> = ({ handleClickSearch }) => {
  const [form] = Form.useForm();

  const onSearch = (values: {title: string}) => {
    handleClickSearch(values.title);
  };

  return (
    <>
      <Form onFinish={onSearch} form={form} className='my-5 p-1.5'>
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