import Head from 'next/head';
import { Layout, Row, Col, Card, Typography, Select, Button } from 'antd';
import React from 'react';
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
  const [todos, setTodos] = useRecoilState(todoState); //atom
  const totalTodos = useRecoilValue(totalState); //selector
  const [select, setSelect] = useRecoilState(slectState);
  const [search, setSearch] = useRecoilState(searchState);

  const { Option } = Select;

  const handleClickAdd = (value: string) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const data = {
      id,
      completed: false,
      value,
    };
    setTodos([data, ...todos]);
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

  const handleClickSearch = (value: string) => {
    setSearch(value);
    if (value === '') {
      setSearch('');
    }
  };

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
  };

  const handleClear = () => {
    setTodos([]);
  };

  const handleChange = (value: string) => {
    setSelect(value);
  };

  return (
    <>
      <Head>
        <title>Todo List Antd & Tailwind</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout className='layout'>
        <Content style={{ background: '#ffffff' }}>
          <Row justify='center' align='middle' gutter={[0, 20]}>
            <Col>
              <Title level={4}>Eiffel Todo List Title</Title>
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
                    <Col span={20}>
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
                    <Col span={4}>
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
              </div>
            </Col>

            <Col span={16}>
              <Button size='small'>Total All : {totalTodos.totalTodo}</Button>
              <Button size='small'>
                Total Completed : {totalTodos.completed}
              </Button>
              <Button size='small'>
                Total Uncompleted : {totalTodos.uncompleted}
              </Button>
            </Col>

            <Col span={24}>
              <ListTodo
                onEditTodo={handleClickEdit}
                onCheck={handleClickCheck}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
