/**
 * React 'useEffect' Hooks :
 * The 'useEffect' Hook allows you to perform side effects in your components.
 * Some examples of side effects are: fetching data, directly updating the DOM, and timers.
 *
 * 'useEffect' accepts two arguments. The second argument is optional.
 * Syntax:
 *  useEffect(<function>, <dependency>);
 *
 * Example:
 */

import { useEffect, useState } from "react";

export function TimerUseEffect() {
    const [count, setCount] = useState(0);
    const [max, setMax] = useState(0);
    const [calculation, setCalculation] = useState(0);

    // useEffect() will invoke every time, when there is change in render
    // No dependency passed
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        // effect cleanup
        return () => clearTimeout(timer);
    });

    // an empty array
    useEffect(() => {
        const timer = setTimeout(() => {
            setMax((max) => max + 100);
        }, 1000);

        // effect cleanup
        return () => clearTimeout(timer);
    }, []); // <-- Add empty brackets here

    // Hook dependent on a variable.
    useEffect(() => {
        setCalculation((calculation) => calculation + max);
    }, [max]); // <-- add the count variable here (count dependent variable hook)

    return (
        <>
            <h3>I've rendered {count} times!. Max is {max} </h3>
            <p> <button type="button" onClick={() => { setMax(max => max + 2) }}> Calculate </button>Calculation: {calculation} </p>
        </>
    );
}

/**
 * But wait!! It keeps counting even though it should only count once!
 *
 * 'useEffect' runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
 *
 * This is not what we want. There are several ways to control when side effects run.
 *
 * We should always include the second parameter which accepts an array. We can optionally pass dependencies to 'useEffect' in this array.
 *
 * Example:
 * No dependency passed:
 * useEffect(()=>{
 *  // Runs on every render
 * });
 *
 * An empty array:
 * useEffect(() => {
 *  // Runs only on the first render
 * }, []);
 *
 * props or state values:
 * useEffect(() => {
 *  // Runs on the first render
 *  // And any time any dependency value changes
 * }, [prop, state]);
 *
 * So, to fix this issue, let's only run this effect on the initial render.
 *
 *
 * If there are multiple dependencies, they should be included in the 'useEffect' dependency array.
 *
 */

/**
 * Effect CleanUp:
 * Some effects require cleanup to reduce memory leaks.
 *
 * Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
 *
 * We do this by including a return function at the end of the 'useEffect' Hook.
 *
 * Note: To clear the timer, we had to name it.
 */
