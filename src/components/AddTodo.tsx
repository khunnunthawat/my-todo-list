import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

interface TodoAddprops {
  handleClickAdd: (value: string) => void;
}

type LayoutType = Parameters<typeof Form>[0]['layout'];

const AddTodo: React.FC<TodoAddprops> = ({ handleClickAdd }) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onSubmit = (values: { title: string }) => {
    handleClickAdd(values.title);
  };

  // const inputTextHandler = (e) => {
  //   // console.log(e.target.value);
  //   setInputText(e.target.value);
  // };

  // const submitTodoHandler = (e) => {
  //   e.preventDefault();
  //   setTodos([
  //     ...todos,
  //     { text: inputText, completed: false, id: Math.random() * 1000 },
  //   ]);
  //   setInputText('');
  // };

  // const statusHandler = (e) => {
  //   setStatus(e.target.value);
  //   // console.log(e.target.value);
  // };

  return (
    <>
      <Form
        onFinish={onSubmit}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
      >
        <Form.Item label='Input' name='title'>
          <Input placeholder='input todo' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddTodo;
