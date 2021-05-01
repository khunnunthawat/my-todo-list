import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, Form, Input } from 'antd';
import {
  DeleteTwoTone,
  EditTwoTone,
  CheckCircleTwoTone,
} from '@ant-design/icons';
import { TodoProps } from '@/components/types/index';
import { useRecoilState } from 'recoil';
import { todoState } from './recoil/atom';

const ListTodo = () => {
  // const [todo, setTodo] = useState<Todoprops[] | []>([]);
  const [todos, setTodos] = useRecoilState(todoState);
  const [modalEdit, setModalEdit] = useState(false);

  const handleClickDelete = function (todo: TodoProps) {
    if (todos.length > 0) {
      setTodos(todos.filter((todoList) => todoList.id !== todo.id));
    }
  };

  const handleClickCancel = () => {
    setModalEdit(false);
  };

  const handleClickEdit = () => {};

  return (
    <>
      {todos.map((todo: TodoProps) => {
        return (
          <Modal
            key={todo.id}
            title='Edit Todo'
            visible={modalEdit}
            onCancel={handleClickCancel}
            footer={[
              <Button type='primary' key='submit'>
                Add
              </Button>,
            ]}
          >
            <Form
              onFinish={handleClickEdit}
              layout='vertical'
            >
              <Form.Item name='id'>
                <Input placeholder='Enter text' type='hidden' />
              </Form.Item>
              <Form.Item label=' ' name='title'>
                <Input placeholder='Enter text' />
              </Form.Item>
            </Form>
          </Modal>
        );
      })}

      {todos.map((todo: TodoProps) => {
        return (
          <Row key={todo.id} justify='center' gutter={[0, 20]}>
            <Col>
              <Card
                style={{ width: 500, marginTop: 16 }}
                actions={[
                  <CheckCircleTwoTone key='check' twoToneColor='#10B981' />,
                  <EditTwoTone
                    key='edit'
                    onClick={() => {
                      setModalEdit(true);
                    }}
                    twoToneColor='#057ADF'
                  />,
                  <DeleteTwoTone
                    key='delete'
                    onClick={() => handleClickDelete(todo)}
                    twoToneColor='#ef4444'
                  />,
                ]}
              >
                <p>{todo.value}</p>
              </Card>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default ListTodo;

{
  /* <button className='px-4 py-1 text-white bg-blue-600 hover:bg-gray-900 focus:outline-none rounded-md'>
  BTN
</button>; */
}
