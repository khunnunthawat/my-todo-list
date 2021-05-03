import Head from 'next/head';
import {
  Layout,
  Row,
  Col,
  Card,
  Typography,
  Select,
  Button,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { AddTodo } from '@/components/AddTodo';
import { SearchTodo } from '@/components/SearchTodo';
import { ListTodo } from '@/components/ListTodo';
import { TodoProps } from '@/components/types/index';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoState, slectState, searchState } from '@/components/recoil/atom';
import { totalState } from '@/components/recoil/selector';
import _ from 'lodash';

const { Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  // const [todo, setTodo] = useState<Todoprops[]|[]>([]);
  const [todos, setTodos] = useRecoilState(todoState); //atom
  const totalTodos = useRecoilValue(totalState); //selector
  const [select, setSelect] = useRecoilState(slectState);
  const [search, setSearch] = useRecoilState(searchState);

  const { Option } = Select;

  const handleClickAdd = function (value: string) {
    const id = Math.floor(Math.random() * 1000) + 1;
    const data = {
      id,
      completed: false,
      value,
    };
    setTodos([...todos, data]);
  };

  const handleClickEdit = (newId: number, newValue: string) => {
    const todoT = _.cloneDeep(todos);
    const newData = todoT.map((data) => {
      if (data.id === newId) {
        data.value = newValue;
      }
      return data;
    });
    setTodos(newData);
  };

  function handleClickSearch(value: string) {
    setSearch(value);
    if (value === '') {
      setSearch('');
    }
  }

  const handleClickCheck = (todo: TodoProps) => {
    if (todos.length > 0) {
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        })
      );
    }
    console.log(todo);
  };

  const handleClear = () => {
    // clear all history
    setTodos([]);
  };

  function handleChange(value: string) {
    console.log(`selected : ${value}`);
    setSelect(value);
  }

  return (
    <>
      <Head>
        <title>Daytech Todo List</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout className='layout'>
        <Content style={{ background: '#ffffff' }}>
          <Row justify='center' align='middle' gutter={[0, 20]}>
            <Col>
              <Title level={4}>Daytech Todo List Title</Title>
            </Col>

            <Col span={24}>
              <Card title='Create a new todo'>
                <AddTodo handleClickAdd={handleClickAdd} />
              </Card>
            </Col>

            <Col span={24}>
              <div className='my-2.5'>
                <h1 className='font-medium text-base'>Search todo</h1>
                <SearchTodo handleClickSearch={handleClickSearch} />
              </div>
            </Col>

            <Col span={24}>
              <div className='my-2.5'>
                <h1 className='font-medium text-base'>Todo List</h1>
                <div className='my-2.5'>
                  <Row>
                    <Col span={6}>
                      <Select
                        defaultValue='all'
                        style={{ width: 125 }}
                        onChange={handleChange}
                        size='small'
                      >
                        <Option value='all'>All</Option>
                        <Option value='completed'>Completed</Option>
                        <Option value='uncompleted'>Uncompleted</Option>
                      </Select>
                    </Col>
                    <Col span={16}>
                      <Button size='small'>
                        Total All : {totalTodos.totalTodo}
                      </Button>
                      <Button size='small'>
                        Total Completed : {totalTodos.completed}
                      </Button>
                      <Button size='small'>
                        Total Uncompleted : {totalTodos.uncompleted}
                      </Button>
                    </Col>
                    <Col span={2}>
                      <Button
                        size='small'
                        type='default'
                        onClick={() => handleClear()}
                      >
                        <Text onClick={() => handleClear()} type='danger'>
                          Clear
                        </Text>
                      </Button>
                    </Col>
                  </Row>
                </div>
                <ListTodo onEdit={handleClickEdit} onCheck={handleClickCheck} />
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Home;

// className='flex flex-col items-center justify-center py-2'
// Create a new todo
// className='w-100 max-w-4xl mx-auto p-5'
// className='w-full h-screen max-h-screen min-w-full'
// const handleClickCheck = (todo: TodoProps) => {
//   if (todos.length > 0) {
//     setTodos( todos.map((item) => {
//         if (item.id === todo.id) {
//           return {
//             ...item,
//             completed: !item.status,
//           };
//         }
//         return item;
//       })
//     );
//   }
// };
