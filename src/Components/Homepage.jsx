import { useState } from "react";
import Card from "./Card";
import AddTodoModal from "./Modals/AddTodoModal";

function Homepage({ isModalVisible, setModalVisible, todos, setTodos }) {
    const addTodo = (title, description) => {
        setTodos([...todos, {
            title, description,
            date_created: new Date()
        }]);
    };

    return (
        <>
            <div className="row">
                {todos.map((todo, index) => (
                    <Card key={index} {...todo}/>
                ))}
            </div>
            <AddTodoModal visible={isModalVisible} setVisible={setModalVisible} addTodo={addTodo} />
        </>
    )
}


export default Homepage;