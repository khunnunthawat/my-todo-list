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

const ListTodo = ({ onEdit }: any) => {
  // const [todo, setTodo] = useState<Todoprops[] | []>([]);
  const [todos, setTodos] = useRecoilState(todoState);
  const [modalEdit, setModalEdit] = useState(false);
  const [form] = Form.useForm();

  const handleClickCancel = () => {
    setModalEdit(false);
  };

  const handleClickDelete = function (todo: TodoProps) {
    if (todos.length > 0) {
      setTodos(todos.filter((todoList) => todoList.id !== todo.id));
    }
  };

  const handleClickEdit = (values: { title: string; id: number }) => {
    setModalEdit(false);
    onEdit(values.id, values.title);
    // console.log(values.id + values.title);
  };

  return (
    <>
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
                      form.setFieldsValue({
                        title: todo.value,
                        id: todo.id,
                      });
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
              <Modal
                title='Edit Todo'
                visible={modalEdit}
                onCancel={handleClickCancel}
                footer={[
                  <Button
                    form='myForm'
                    type='primary'
                    key='submit'
                    htmlType='submit'
                  >
                    Add
                  </Button>,
                ]}
              >
                <Form
                  onFinish={handleClickEdit}
                  form={form}
                  id='myForm'
                  layout='vertical'
                  initialValues={{ remember: todo.value }}
                >
                  <Form.Item label=' ' name='title'>
                    <Input placeholder='Enter text' />
                  </Form.Item>
                  <Form.Item name='id'>
                    <Input placeholder='Enter text' type='hidden' />
                  </Form.Item>
                </Form>
              </Modal>
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
