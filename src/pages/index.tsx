import Head from 'next/head';
import { Layout, Row, Col, Card, PageHeader, Select } from 'antd';
import React, { useState } from 'react';
import AddTodo from '@/components/AddTodo';
import SearchTodo from '@/components/SearchTodo';
import ListTodo from '@/components/ListTodo';
import { TodoProps } from '@/components/types/index';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoState, slectState, searchState } from '@/components/recoil/atom';
import { totalState } from '@/components/recoil/selector';
import _ from 'lodash';
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
  const [select, setSelect] = useRecoilState(slectState);
  const [search, setSearch] = useRecoilState(searchState);


  const { Option } = Select;

  const handleClickAdd = function (value: string) {
    const id = Math.floor(Math.random() * 1000) + 1;
    const data = {
      id,
      status: false,
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
    //   if (data.id === newId) {
    //     data.value = newValue;
    //     // return newId;
    //   }
    //   return data;
  };

  function handleSearch(value: string) {
    console.log("xxx" + value);
    setSearch(value);
    if (value === '') {
      setSearch('');
    }
  }

  function handleChange(value: string) {
    console.log(`selected ${value}`);
    setSelect(value);
  }

  // console.log(todos);

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
              <PageHeader title='Daytech Todo List' />
            </Col>

            <Col span={24}>
              <Card title='Create a new todo'>
                <AddTodo handleClickAdd={handleClickAdd} />
              </Card>
            </Col>

            <Col span={24}>
              <div className='my-2.5'>
                <h1 className='font-medium text-base'>Search todo</h1>
                <SearchTodo handleClickSearch={handleSearch} />
              </div>
            </Col>

            <Col span={24}>
              <div className='my-2.5'>
                <h1 className='font-medium text-base'>Todo List</h1>
                <div className='my-2.5'>
                  <Select
                    defaultValue='all'
                    style={{ width: 140 }}
                    onChange={handleChange}
                  >
                    <Option value='all'>All</Option>
                    <Option value='completed'>Completed</Option>
                    <Option value='uncompleted'>Uncompleted</Option>
                  </Select>
                </div>
                <ListTodo onEdit={handleClickEdit} />
                
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
