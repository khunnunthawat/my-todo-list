import React, { useState } from 'react';
import { Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
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

  const handleClickDelete = function () {};

  return (
    <>
      {todos.map((todo: TodoProps) => {
        return (
          <Card
            key={todo.id}
            title='Todo List'
            style={{ width: 300 }}
          >
            <p>{ todo.value }</p>
            <DeleteOutlined key='delete' onClick={() => handleClickDelete} />
          </Card>
        );
      })}
    </>
  );
};

export default AddTodo;
