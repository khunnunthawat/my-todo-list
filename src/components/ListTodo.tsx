import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { TodoProps } from '@/components/types/index';
import { useRecoilState } from 'recoil';
import { todoState } from './recoil/atom';

// interface Todoprops {
//   id: number;
//   status: boolean;
//   value: string;
// }

const AddTodo = ({ todo }: any) => {
  // const [todo, setTodo] = useState<Todoprops[] | []>([]);
  const [todos, setTodos] = useRecoilState(todoState);

  const handleClickDelete = function () {
    if (todos.length > 0) {
      setTodos(todos.filter((todos) => todo.id !== todo.id));
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
                  <DeleteTwoTone
                    key='delete'
                    onClick={() => handleClickDelete}
                    twoToneColor='#ef4444'
                  />,
                  <EditTwoTone key='edit' twoToneColor='#057ADF' />,
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

export default AddTodo;
