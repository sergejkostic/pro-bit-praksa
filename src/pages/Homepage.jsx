import { useState } from "react";
import Card from "../Components/Card";
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
    </>
  );
}

export default Homepage;
