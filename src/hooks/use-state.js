/**
 * React useState Hook:
 * The React 'useState' Hook allows us to track state in a function component.
 * State generally refers to data or properties that need to be tracking in an application.
 *
 * Import 'useState'
 * To use the 'useState' Hook, we first need to 'import' it into your component.
 *
 * Example:
 * At the top of your component, 'import' the 'useState' Hook.
 */

import { useState } from "react";

/**
 * Notice that we are destructuring 'useState' from 'react' as it is a named export.
 */

/**
 * Initialize 'useState' :
 * We initialize out state by calling 'useState' in out function component.
 *
 * 'useState' accepts an initial state and returns two values
 *  1. The current state.
 *  2. A function that updates the state.
 *
 * Example:
 * Initialize state at the top of the function component.
 *
 * const [color, setColor] = useState("");
 */

/**
 * Notice that again, we are destructuring the returned values from 'useState'.
 * The first value, 'color', is our current state.
 * The second value, 'setColor', is the function that is used to update our state.
 *
 * Note: These names are varibales that can be named anything you would like.
 *
 * Lastly, we set the initial state to an empty string: 'useState("")'
 */

/**
 * Read State:
 * We can now include out state anywhere in our component.
 *
 * <h2> My favorite read state color is {color}! </h2>
 */

/**
 * Update State:
 * To update our state, we use our state updater function.
 *
 * Note: We should never directly update state. Ex: color = 'red' is not allowed.
 *
 * <button type="button" onClick={()=> setColor("blue")} > Blue </button>
 */

export function FavoriteColorUseState() {
    // Initialise the state
    const [bgcolor, setBgcolor] = useState("");
    // Set default initialize value
    const [color, setColor] = useState("red");

    return <>
        <div>
            {/* Read the state */}
            My favorite color is {color} !
            {/* Update the state */}
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
        </div>
    </>;
}

/** What can state hold
 * The 'useState' Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
 *
 * We would create multiple state Hooks to track individual values.
 *
*/
export function MyCarUseState() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    // u can use an object
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustag",
        year: "1954",
        color: "silver"
    });

    // Updating the objects and Arrays in state
    const updateColor = () => {
        setCar(prevState => {
            return { ...prevState, color: "blue" };
        });
    };

    return (
        <>
            <div>
                My {brand}
                <p>
                    It is a {color} {model} from {year}.
                </p>
                <p>
                    My Car {car.brand}.
                    It is a {car.color} {car.model} from {car.year}.
                </p>
            </div>
            <div>
                {/* Updating the object and arrays in state */}
                <button type="button" onClick={updateColor}> Click Me Blue! </button>
            </div>
        </>
    );
}

/** Since we are now tracking a single object, we need to reference that object and then the property of that object
 * when rendering the component.
 */

/**
 * Updating Objects and Arrays in State
 * When state is updated, the entire state gets overwritten.
 * What if we only want to update the color of our car?
 * If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
 * We can use the JavaScript spread operator to help us.
 * Example:
 * setCar(prevState => {
 *  return {...prevState, color : "blue"};
 * });
 *
 * Because we need the current value of state, we pass a function into our 'setCar' function.
 * This function receives the previous value.
 *
 * We then return an object, spreading the prevState and overwriting only the color.
 */
