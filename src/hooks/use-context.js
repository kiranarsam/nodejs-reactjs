/**
 * React useContext Hook:
 *
 * React Context:
 * React Context is a way to manage state globally.
 *
 * It can be used together with the 'useState' Hook to share state between deeply nested components
 * more easily than with 'useState' alone.
 *
 * The Problem:
 * State should be held by the highest parent component in the stack that requires access to the state.
 *
 * To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
 *
 * TO do this without Context, we will need to pass the state as "props" through each nested component.
 * This is called "prop drilling".
 */

import { createContext, useContext, useState } from "react";

// Example: prop drilling

export function ComponentPropDrilling() {
    const [user, setUser] = useState("Boss");

    return (
        <>
            <div> Hello {user}</div>
            <Component2 user={user}></Component2>
        </>
    );
}

function Component2({ user }) {
    return (
        <>
            <div>
                <Component3 user={user}> </Component3>
            </div>
        </>
    );
}

function Component3({ user }) {
    return (
        <>
            <div>
                <Component4 user={user}> </Component4>
            </div>
        </>
    );
}

function Component4({ user }) {
    return (
        <>
            <div>
                Hello {user} again!
            </div>
        </>
    );
}
/**
 * Even though few middle components did not need the state, they had to pass the state along
 *  so that it could reach last base component.
 */

/**
 * The Solution:
 * The solution is to create context.
 *
 * Create Context:
 * To create context, you must Import 'createContext' and initialize it.
 *
 * import {createContext} from "react";
 * const UserContext = createContext();
 *
 * Next we'll use the Context Provider to wrap the tree of components that need the state Context.
 *
 * Context Provider:
 * Wrap child components in the Context Provider and supply the state value.
 */

const UserContext = createContext();
export function ComponentWithUsageCreateContext() {
    const [user, setUser] = useState("Boss");

    return (
        /* createContext */
        <UserContext.Provider value={user}>
            <h1>Language Selection</h1>

            {/* get info With useContext */}
            <ComponentWithUseContext2></ComponentWithUseContext2>

            {/* get info with prop state */}
            <Component2 user={user}></Component2>

        </UserContext.Provider>
    );
}

/** Now, all components in this tree will have access to the user Context. */

/**
 * Use the 'useContext' Hook
 * In order to use the Context in a child component, we need to access it using the 'useContext' Hook.
 * First, include the 'useContext' in the import statement:
 *
 *  import { useContext } from "react";
 *
 * Then you can access the user Context in all components:
 */

function ComponentWithUseContext2() {
    const user = useContext(UserContext);

    return (
        <>
            <div>ComponentWithUseContext2 </div>
            <ComponentWithUseContext3></ComponentWithUseContext3>
        </>
    );
}

function ComponentWithUseContext3() {
    const user = useContext(UserContext);

    return (
        <>
            <div>ComponentWithUseContext3 </div>
            <ComponentEndWithUseContext></ComponentEndWithUseContext>
        </>
    );
}

function ComponentEndWithUseContext() {
    const user = useContext(UserContext);

    return (
        <>
            <div>ComponentEndWithUseContext: Component usage with useContext </div>
            <p> Hello {user}, with useContext </p>
        </>
    );
}