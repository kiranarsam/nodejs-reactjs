/**
 * React Memo:
 * Using 'memo' will cause React to skip rendering a component if its props have not changed.
 *
 * This can improve performance.
 *
 * Problem:
 * In this example, the 'Todos' component re-renders even when the tods have not changed.
 *
 */

import { useState } from "react";
import Todos, { ProblemTodosComp } from "../todos/todos";

export function ProblemTodos() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
            <ProblemTodosComp todos={todos} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}
/**
 * When you click the increment button, the Todos component re-renders.
 *
 * If this component was complex, it could cause performance issues.
 */

/**
 * Solution:
 * To fix this, we can use 'memo'.
 *
 * Use 'memo' to keep the 'Todos' component from needlessly re-rendering.
 * Wrap the todos component export in 'memo':
 *
 */
export function SolutionTodosMemo() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
            <Todos todos={todos} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}
/**
 * Now the 'Todos' component only re-renders when the 'todos' that are passed to it through props are updated.
 */