import { useState } from "react";

/**
 * React Forms
 * Just like in HTML, React uses forms to allow users to interact with the web page.
 *
 * Adding Forms in React
 * You add a form with React like any other element.
 * Example:
 * Add a form that allows users to enter their name:
 */
export function MyForm() {
    return (
        <>
            <form>
                <label>
                    Enter your name:
                    <input type="text" />
                </label>
            </form>
        </>
    );
}
/** Usage: <MyForm />
 * This will work as normal, the form will submit and the page will refresh.
 * But this is generally not what we want to happen in React.
 * We want to prevent this default behaviour and let React control the form.
*/

/**
 * Handling Forms:
 * Handling forms is about how you handle the data when it changes value or gets submitted.
 * In HTML, form data is usually handled by the DOM.
 * In React, form data is usually handled by the components.
 * When the data is handled by the components, a;; the data is stored in the component state.
 * You can control changes by adding event handlers in the 'onChange' attribute.
 * We can use the 'useState' Hook to keep track of each inputs value and provide a "single source of truth"
 *  for the entire application.
 */
function MyForm02() {
    const [name, setName] = useState("");

    return (
        <>
            <form>
                <label>
                    Enter your name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </form>
        </>
    );
}

/**
 * Submitting Forms:
 * You can control the submit action by adding an event handler in the 'onSubmit' attribute for the '<form>'
 * Example:
 * Add a submit button and an event handler in the 'onSubmit' attribute:
 */
function MyForm03() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was: ${name}`);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>

                <input type="submit" />
            </form>
        </>
    );
}

/**
 * Multiple Input Fields:
 * You can control the values of more than one input field by adding a 'name' attribute to each element.
 * We will initialize our state with an empty object.
 * To access the fields in the event handler use the 'event.target.name' and 'event.target.value' syntax.
 * To update the state, use square brackets [bracket notation] around the property name.
 * Example:
 * Write a form with two input fields
 */
export function MyForm04() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was:`, inputs);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
                </label>

                <label>
                    Enter your age:
                    <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
                </label>

                <input type="submit" />
            </form>
        </>
    );
}
/**
 * Note: We use the same event handler function for both input fields, we could write
 * one event handler for each, but this gives us much cleaner code and is the
 * preferred way in React.
 *
*/

/**
 * Textarea:
 * The textarea element in React is slightly different from ordinary HTML.
 * In HTML the value of a textarea was the text between the start tag '<textarea>' and the
 * end tag '</textarea>'.
 * Example:
 * <textarea>
 *      Content of the textarea.
 * </textarea>
 *
 * In React the value of a textarea is placed in a value attribute. We'll use the 'useState' Hook to
 * manage the value of the textarea:
 * Example:
 */

export function MyForm05() {
    const [textarea, setTextarea] = useState("");

    const handleChange = (event) => {
        setTextarea(event.target.value);
    }

    return (
        <>
            <form>
                <textarea value={textarea} onChange={handleChange} />
            </form>
        </>
    );
}

/**
 * Select
 * A drop down list, or a select box, in React is also a bit different from HTML.
 * in HTML, the selected value in the drop down list was defined with the 'selected' attribute:
 * Example:
 * <select>
 *      <option value="Ford" > Ford </option>
 *      <option value="Swift" selected > Swift </option>
 *      <option value="Toyota" > Toyota </option>
 * </select>
 *
 * In React, the selected value is defined with a 'value' attribute on the 'select' tag.
 * Example:
 *  A simple select box, where the selected value "Volvo" is initialized in the constructor.
 */
export function MyForm06() {
    const [myCar, setMyCar] = useState("Swift");

    const handleChange = (event) => {
        setMyCar(event.target.value);
    }

    return (
        <>
            <form>
                <select value={myCar} onChange={handleChange}>
                    <option value="Ford">Ford</option>
                    <option value="Swift">Swift</option>
                    <option value="Toyota">Toyota</option>
                </select>
            </form>
        </>
    );
}
/**
 * By making these slight changes to '<textarea>' and '<select>',
 *  React is able to handle all input elements in the same way.
 */