import { atom, selector } from 'recoil';
import { todoState, searchState } from './atom';

export const totalState = selector({
  key: 'total',
  get: ({ get }) => {
    const totalTodo = get(todoState); //เอาค่าจาก todoState มา
    // const completed = totalTodo.filter((data) => {
    //   return data.status === false;
    // });
    // return totalTodo;
    return {
      total: totalTodo.length,
      // completed,
      notCompleted: 2,
      search: 'dd',
    };
  },
});

export const todoSearchState = selector({
  key: 'todoSearch',
  get: ({ get }) => {
    const todoList = get(todoState);
    const todoSearch = get(searchState);
    let searchTodo = todoList;
    if (todoSearch !== '') {
      searchTodo = todoList.filter((todo) => {
        return todo.value.includes(todoSearch); // includes คำไหนที่ค้นหาจะนำมาโชว์
      });
    }
    return searchTodo;
    // return JSON.stringify(searchTodo);
  },
});

  
