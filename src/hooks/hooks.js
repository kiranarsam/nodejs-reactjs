/**
 * Hooks:
 * Hooks were added to React in version 16.8
 *
 * Hooks allow function components to have access to state and other React features.
 * Because of this, class components are generally no longer needed.
 *
 * Note: Although Hooks generally replace class components, there are no plans to remove classes from React.
 *
 * What is a Hook?
 * Hooks allow us to "hook" into React features such as state and lifecycle methods.
 *
 * Example:
 */

import React, { useState } from "react";

export function FavoriteColor() {
    const [color, setColor] = useState('red');

    const onButtonClick = (c) => {
        setColor(c);
    };

    return <>
        <h1> My favorite color is {color}! </h1>
        <button type="button" onClick={() => onButtonClick('blue')}> Blue </button>
        <button type="button" onClick={() => onButtonClick('red')}> Red </button>
        <button type="button" onClick={() => onButtonClick('pink')}> Pink </button>
        <button type="button" onClick={() => onButtonClick('green')}> Green </button>
    </>;
}

/**
 * You must 'import' Hooks from 'react'.
 * Here we are using the 'useState' Hook to keep track of the application state.
 * State generally refers to application data or properties that need to be tracked.
 *
 * Hook Rules:
 * 1. Hooks can only be called inside React function components
 * 2. Hooks can only be called at the top level of a component
 * 3. Hooks cannot be conditional
 *
 * Note: Hooks will not work in React class components.
 *
 * Custom Hooks:
 * If you have stateful logic that needs to be reused in serveral components, you can build your own custom Hooks.
 *
 */