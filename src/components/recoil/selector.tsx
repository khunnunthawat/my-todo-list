import { selector } from 'recoil';
import { todoState, searchState, slectState } from './atom';

export const totalState = selector({
  key: 'total',
  get: ({ get }) => {
    const totalTodo = get(todoState); //เอาค่าจาก todoState มา
    const completed = totalTodo.filter((data) => {
      return data.completed === true;
    });
    const uncompleted = totalTodo.filter((data) => {
      return data.completed === false;
    });
    return {
      // totalTodo
      totalTodo: totalTodo.length,
      completed: completed.length,
      uncompleted: uncompleted.length
      // completed: 1,
      // uncompleted: 2,
    };
  },
});

export const todoSearchState = selector({
  key: 'todoSearch',
  get: ({ get }) => {
    const todoList = get(todoState);
    const todoSearch = get(searchState);
    const selectStatus = get(slectState);

    let searchTodo = todoList;
    if (todoSearch !== '') {
      searchTodo = todoList.filter((todo) => {
        return todo.value.includes(todoSearch); // includes คำไหนที่ค้นหาจะนำมาโชว์
      });
    }
    if (selectStatus === 'completed') {
      searchTodo = todoList.filter((todo) => {
        return todo.completed === true;
      });
      console.log('completed');
    }
    if (selectStatus === 'uncompleted') {
      searchTodo = todoList.filter((todo) => {
        return todo.completed === false;
      });
      console.log('uncompleted');
    }
    return searchTodo;
    // return JSON.stringify(searchTodo);
  },
});

// const filterHandler = () => {
//   switch (status) {
//     case 'completed':
//       setFilteredTodos(todos.filter((todo) => todo.completed === true));
//       break;
//     case 'uncompleted':
//       setFilteredTodos(todos.filter((todo) => todo.completed === false));
//       break;
//     default:
//       setFilteredTodos(todos);
//       break;
//   }
// }
//  total: todoList.length,
//       completed: todoList
//         ? todoList.filter((todo) => todo.completed).length
//         : 0,
//       uncompleted: todoList
//         ? todoList.filter((todo) => todo.completed).length
//         : 0,
