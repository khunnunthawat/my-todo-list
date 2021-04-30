import Head from 'next/head';
import React, { useState } from 'react';
import AddTodo from '@/components/AddTodo';
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
    
  }
  
  console.log(todos);
  
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <Head>
          <title>Daytech Todo List</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {/* <div className='ant-row ant-row-center ant-row-middle todos-container'>
          <AddTodo handleClickAdd={handleClickAdd} />
          <ListTodo />
        </div> */}
        <AddTodo handleClickAdd={handleClickAdd} />
        <ListTodo />
      </div>
    </>
  );
};

export default Home;