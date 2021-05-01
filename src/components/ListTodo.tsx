import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import { DeleteTwoTone, EditTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { TodoProps } from '@/components/types/index';
import { useRecoilState } from 'recoil';
import { todoState } from './recoil/atom';

const ListTodo = () => {
  // const [todo, setTodo] = useState<Todoprops[] | []>([]);
  const [todos, setTodos] = useRecoilState(todoState);

  const handleClickDelete = function (todo: TodoProps) {
    if (todos.length > 0) {
      setTodos(todos.filter((widget) => widget.id !== todo.id));
    }
    setTodos([]);
  };

  return (
    <>
      {todos.map((todo: TodoProps) => {
        return (
          <Row justify='center' gutter={[0, 20]}>
            <Col>
              <Card
                key={todo.id}
                style={{ width: 500, marginTop: 16 }}
                actions={[
                  <CheckCircleTwoTone key='check' twoToneColor='#10B981' />,
                  <EditTwoTone key='edit' twoToneColor='#057ADF' />,
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

{/* <button className='px-4 py-1 text-white bg-blue-600 hover:bg-gray-900 focus:outline-none rounded-md'>
  BTN
</button>; */}

