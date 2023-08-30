/**
 * React useRef Hook:
 *
 * The 'useRef' Hook allows you to persist values between renders.
 * It can be used to store a mutable value that does not cause a re-render when updated.
 * It can be used to access a DOM element directly.
 *
 * Does Not Cause Re-renders:
 * If we tried to count how many times our application renders using the 'useState' Hook, we would
 * be caught in an infinite loop since this Hook itself causes a re-render.
 *
 * To avoid this, we can use the 'useRef' Hook.
 *
 * Use 'useRef' to track application renders.
 */

import { useEffect, useRef, useState } from "react";

export function ReactUseRefUsage() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h3> Render Count: {count.current}</h3>
        </>
    );
}

/**
 * 'useRef()' only returns one item. It returns an Object called 'current'.
 * When we initialize 'useRef' we set the initial value: 'useRef(0)'
 *
 * Note: It's like doing this: const count = {current: 0} , We can access the count by using count.current
 */

/** Accessing DOM Elements:
 * In general, we want to let React handle all DOM manipulation.
 * But there are some instances where 'useRef' can be used without causing issues.
 * In React, we can add a 'ref' attribute to an element to access it directly in the DOM.
 */
export function ReactRefAccessingDomElements() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}> Focus Input </button>
        </>
    );
}

/** Tracking State Changes:
 * The 'useRef' Hook can also be used to keep track of previous state values.
 * This is because we are able to persist 'useRef' values between renders.
 */

export function ReactRefTrackingStateChanges() {
    console.log("ReactRefTrackingStateChanges on Entry method() ");
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
    console.log("ReactRefTrackingStateChanges before useEffect() ");

    useEffect(() => {
        console.log("ReactRefTrackingStateChanges useEffect(<dep>) ");
        previousInputValue.current = inputValue;
    }, [inputValue]);

    const changeInput = (e) => {
        console.log("ReactRefTrackingStateChanges changeInput ");
        setInputValue(e.target.value);
    };

    console.log("ReactRefTrackingStateChanges on Exit method() ");
    return (
        <>
            <input type="text" value={inputValue} onChange={changeInput} />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}

/**
 * This time we use a combination of 'useState', 'useEffect', and 'useRef' to keep track of the previous state.
 *
 * In the 'useEffect', we are updating the 'useRef' current value each time the 'inputValue' is updated by
 * entering text into the input field.
 */
