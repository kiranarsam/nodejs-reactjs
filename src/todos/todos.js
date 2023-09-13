import { memo } from "react";

function Todos({ todos, addTodo }) {
    console.log("Child render!...");
    return (
        <>
            <h2>
                My Todos
            </h2>
            {
                todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })
            }
            {addTodo &&
                <button onClick={addTodo}> Add Todo </button>
            }

        </>
    )
}

export const ProblemTodosComp = ({ todos }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
};

export default memo(Todos);