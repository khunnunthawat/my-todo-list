import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { useRecoilState } from 'recoil';
import { editState } from './recoil/atom';
import { EditProps } from './types';

export const EditTodo = ({ todo, onEdit }: EditProps) => {
  const [modalEdit, setModalEdit] = useRecoilState(editState);
  const [form] = Form.useForm();

  const handleClickCancel = () => {
    setModalEdit(false);
  };

  const handleClickEdit = (values: { title: string; id: number }) => {
    setModalEdit(false);
    onEdit(values.id, values.title);
    // console.log(values.id + values.title);
  };

  return (
    <>
      <Modal
        key={todo.id}
        title='Edit Todo'
        visible={modalEdit}
        onCancel={handleClickCancel}
        footer={[
          <Button form='myForm' type='primary' key='submit' htmlType='submit'>
            Edit
          </Button>,
        ]}
      >
        <Form
          onFinish={handleClickEdit}
          form={form}
          id='myForm'
          layout='vertical'
          initialValues={{ remember: todo.value }}
          name='id'
        >
          <Form.Item name='id'>
            <Input type='hidden' />
            <Form.Item name='title'>
              <Input size='middle' placeholder='Edit text todo' />
            </Form.Item>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}