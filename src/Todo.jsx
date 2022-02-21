import React from 'react';
import {observer} from "mobx-react";
import todo from "./store/todo";

const Todo = observer(() => {
  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>Fetch todo</button>
      {
        todo.todos.map(t =>
          <div key={t.id}>
            <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)}/>
            {t.title}
            <button onClick={() => todo.removeTodo(t.id)}>*</button>
          </div>
        )
      }
    </div>
  );
});

export default Todo;