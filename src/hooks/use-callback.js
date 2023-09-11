/**
 * React useCallback Hook
 * The React 'useCallback' Hook returns a memoized callback function.
 *
 * Note: Think of memoization as caching a value so that it does not need to be recalculated.
 *
 * This allows us to isolate resource intensive functions so that they will not automatically run on every render.
 *
 * The 'useCallback' Hook only runs when one of its dependencies update.
 * This can improve performance.
 *
 * Note:
 * The 'useCallback' and 'useMemo' Hooks are similar.
 * The main difference is that 'useMemo' returns a memoized value and
 * 'useCallback' returns a memoized function.
 *
 */

import { useCallback, useState } from "react";
import Todos from "../todos/todos";

// Problem:
/**
 * One reason to use 'useCallback' is to prevent a component from re-rendering unless its props have changed.
 *
 * Example: Here,
 * 'Todos' component will not re-render unless the 'todos' change.
 */

export function ReactUseCallbackProblem() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = () => {
        setTodos((t) => [...t, "New todo todo"]);
    };

    return (
        <>
            <hr />
            <Todos todos={todos} addTodo={addTodo}></Todos>
            <div>
                Count : {count}
                <button onClick={increment}>  +  </button>
            </div>
            <hr />
        </>
    );
}
/** Output:
 * Click the count increment button.
 * You will notice that the 'Todos' component re-renders even when the 'todos' do not change.
 *
 * Why does this not work? We are using memo, so the 'Todos' component should not re-render
 * since neither the 'todos' state not the 'addTodo' function are changing when the count is incremented.
 * This is because of something called "referential equality".
 *
 * Every time a component re-renders, its functions get recreated. Becuase of this, the 'addTodo' function has actually changed.
 */


//Solution
/**
 * To fix this, we can use the 'useCallback' hook to prevent the function from being recreated unless necessary.
 * Use the 'useCallback' Hook to prevent the Todos component from re-rendering needlessly.
 */
export function ReactUseCallbackSolution() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New todo == todo"]);
    }, [todos]);

    return (
        <>
            <hr />
            <Todos todos={todos} addTodo={addTodo}></Todos>
            <div>
                Count: {count}
                <button onClick={increment}> + </button>
            </div>
            <hr />
        </>
    )
}
/**
 * Now, the 'Todos' component will only re-render when the todos prop changes.
 */