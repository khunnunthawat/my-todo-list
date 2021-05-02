import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  Input,
  Tooltip,
  Switch,
  Tag,
} from 'antd';
import {
  DeleteTwoTone,
  EditTwoTone,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { TodoProps } from '@/components/types/index';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoState, editState } from './recoil/atom';
import { todoSearchState } from '@/components/recoil/selector';

export const ListTodo = ({ onEdit, onCheck }: any) => {
  // const [todo, setTodo] = useState<Todoprops[] | []>([]);
  const [todos, setTodos] = useRecoilState(todoState);
  const [modalEdit, setModalEdit] = useRecoilState(editState);
  const [form] = Form.useForm();
  const searchTodoList = useRecoilValue(todoSearchState);

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

  const handleCheck = (todo: TodoProps) => {
    onCheck(todo);
  };

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
              <Button
                form='myForm'
                type='primary'
                key='submit'
                htmlType='submit'
              >
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
                  <Input
                    className='h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none'
                    size='middle'
                    placeholder='Edit text todo'
                  />
                </Form.Item>
              </Form.Item>
            </Form>
          </Modal>
        );
      })}

      {searchTodoList.map((todo: TodoProps) => {
        return (
          <Row key={todo.id} justify='center'>
            <Col>
              <Card
                style={{ width: 500, marginTop: 12 }}
                actions={[
                  <Tooltip title={todo.status ? 'Uncompleted' : 'Go completed'}>
                    <Switch
                      defaultChecked={todo.status}
                      onClick={() => handleCheck(todo)}
                    />
                    {/* <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li> */}
                  </Tooltip>,
                  // <CheckCircleOutlined
                  //   key='check'
                  //   onClick={() => handleCheck(todo)}
                  // />,
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
                {/* <p>{todo.value}</p> */}
                <Tag color={todo.status ? 'green' : 'red'}>{todo.value}</Tag>
              </Card>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

{
  /* <button className='px-4 py-1 text-white bg-blue-600 hover:bg-gray-900 focus:outline-none rounded-md'>
  BTN
</button>; */
}
