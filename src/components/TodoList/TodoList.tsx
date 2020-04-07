import React from 'react';
import TodoListItem from './components/TodoListItem';
import seeds from '../../../seeds.json';

type Todo = {
  text: string;
  complete: boolean;
};

const todos: Todo[] = [
  {text: 'Walk the dog', complete: true},
  {text: 'Write app', complete: false},
];
const TodoList = () => {
  return <TodoListItem todo={todos[0]} />;
};
export default TodoList;
