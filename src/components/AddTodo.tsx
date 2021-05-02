import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const { Search } = Input;
interface TodoAddprops {
  handleClickAdd: (value: string) => void;
}

type LayoutType = Parameters<typeof Form>[0]['layout'];

const AddTodo: React.FC<TodoAddprops> = ({ handleClickAdd }) => {
  const [form] = Form.useForm();

  const onSubmit = (values: { title: string }) => {
    handleClickAdd(values.title);
  };

  return (
    <>
      <Form
        onFinish={onSubmit}
        form={form}
        layout='horizontal'
        className='my-5 p-1.5'
      >
        <Row gutter={20}>
          <Col xs={24} sm={24} md={17} lg={19} xl={20}>
            <Form.Item
              name='title'
              rules={[{ required: true, message: 'This field is Todo' }]}
            >
              <Input placeholder='Input todo list...' />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={7} lg={5} xl={4}>
            <Button
              type='primary'
              htmlType='submit'
              block
            >
              Add todo
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AddTodo;

{/* <Row gutter={[8, 8]}>
  <Col span={12} />
  <Col span={12} />
</Row>; */}