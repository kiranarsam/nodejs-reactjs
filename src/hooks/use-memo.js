/**
 * React useMemo Hook
 * The React 'useMemo' Hook returns a memoized value.
 * Note: Think of memoization as caching a value so that it does not need to be recaluculated.
 *
 * The 'useMemo' and 'useCallback' Hooks are similar. The main difference is that useMemo returns a memoized value and
 * 'useCallback' returns a memoized function.
 */

import { useMemo, useState } from "react";

/**
 * Performance:
 * The 'useMemo' Hook can be used to keep expensive, resource intensive functions from needlessly running.
 *
 * Example: we have an expensive function that runs on every render.
 * When changing the count or adding a todo, you will notice a delay in execution.
 */
// A poor performing function.
export function ReactUseMemoPerformanceHitIssue() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <>
            <div>
                <div>
                    <h2>My Todos</h2>
                    {todos.map((todo, index) => {
                        return <p key={index}>{todo}</p>;
                    })}
                    <button onClick={addTodo}>Add Todo</button>
                </div>
                <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
                    <h2>Expensive Calculation</h2>
                    {calculation}
                </div>
                <hr />
            </div>
        </>
    )
}

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

/**
 * Use 'useMemo'
 *
 * To fix the performance issue, we can use the 'useMemo' Hook to memoize the 'expensiveCalculation' function.
 * This will cause the function to only run when needed.
 *
 * We can wrap the expensive function call with 'useMemo'.
 *
 * The 'useMemo' Hook accepts a second parameter to declare dependencies. The expensive function will only run when
 * its dependencies have changed.
 *
 * Example: The expensive function will only run when 'count' is changed and not when 'todo`s' are added.
 */
export function ReactUseMemoPerformanceHitIssueFixed() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    /** When count is changed, this memo will be executed */
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <>
            <div>
                <div>
                    <h2>My Todos</h2>
                    {todos.map((todo, index) => {
                        return <p key={index}>{todo}</p>;
                    })}
                    <button onClick={addTodo}>Add Todo</button>
                </div>
                <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
                    <h2>Expensive Calculation</h2>
                    {calculation}
                </div>
                <hr />
            </div>
        </>
    )
}