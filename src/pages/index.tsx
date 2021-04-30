import Head from 'next/head';
import { Layout, Row, Col, Card, PageHeader } from 'antd';
import React, { useState } from 'react';
import AddTodo from '@/components/AddTodo';
import SearchTodo from '@/components/SearchTodo';
import ListTodo from '@/components/ListTodo';
import { TodoProps } from '@/components/types/index';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoState } from '@/components/recoil/atom';
import { totalState } from '@/components/recoil/selector';
// interface Todoprops {
//   id: number,
//   status: boolean,
//   value: string
// }

const { Content } = Layout;

const Home = () => {

  // const [todo, setTodo] = useState<Todoprops[]|[]>([]);
  const [todos, setTodos] = useRecoilState(todoState); //atom
  const totalTodos = useRecoilValue(totalState); //selector

  const handleClickAdd = function (value: string) {
    const id = Math.floor(Math.random() * 1000) + 1;
    const data = {
      id,
      status: false,
      value
    };
    setTodos([...todos, data]);
  };
  
  console.log(todos);
  
  return (
    <>
      <Head>
        <title>Daytech Todo List</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout className='layout'>
        <Content style={{ padding: '20px 20px' }}>
          <div className='h-full'>
            <Row
              justify='center'
              align='middle'
              gutter={[0, 20]}
              className='my-2'
            >
              <Col span={24}>
                <PageHeader title='Daytech Todo List' />
              </Col>

              <Col span={24}>
                <Card title='Create a new todo'>
                  <AddTodo handleClickAdd={handleClickAdd} />
                </Card>
              </Col>

              <Col span={24}>
                <Card title='Search todo'>
                  <SearchTodo handleClickAdd={handleClickAdd} />
                </Card>
              </Col>

              <Col span={24}>
                <Card title='Todo List'>
                  <ListTodo />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Home;

// className='flex flex-col items-center justify-center py-2'
//Create a new todo