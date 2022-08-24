import { useState } from "react";
import Card from "./Card";
import AddTodoModal from "./Modals/AddTodoModal";
import { useSelector } from "react-redux";

function Homepage() {
const todos = useSelector(state => state.todo.todoData)

  return (
    <>
      <div className="row">
        {todos.map(todo => (
          <Card key={todo.ident} {...todo} />
        ))}
      </div>
      <AddTodoModal />
    </>
  );
}

export default Homepage;
