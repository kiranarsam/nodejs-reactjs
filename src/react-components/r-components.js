/**
 * Components are like functions that return HTML elements.
 *
 * React Components:
 * Components are independent and resuable bits of code. They serve the same purpose as JavaScript functions,
 * but work in isolation and return HTML.
 *
 * Components come in two types,
 * 1. Class components
 * 2. Function components
 *
 * Note: In older React code bases, you may find Class components primarily used.
 * It is now suggested to use Function components along with Hooks, which were added in React 16.8.
 *
 * Create First Component
 * When creating a React component, the components name MUST start with an upper case letter.
 *
 * Class Component:
 * A class component must include the 'extends React.Component' statement.
 * This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
 *
 * The component also requires a 'render()' method, this method returns HTML.
 * Example:
 */
//import React from 'react';

import React from "react";

class MyClassCar extends React.Component {
    render() {
        return <h2>Hi, I am a Car! </h2>;
    }
}

/**
 * Function Component
 * A Function component also returns HTML, and behaves much the same way as a Class component,
 * but Function components can be written using much less code, are easier to understand, and
 * will be prefered in this tutorial.
 */
function MyFunctionCar() {
    return <h2>Hi, I am a Car! </h2>;
}

/** Rendering a Component
 * Now your React application called 'Car', which returns an <h2> element.
 * To use this component in your application, use similar syntax as normal HTML: '<Car />'
 *
 * const root = ReactDOM.createRoot(document.getElementById('root'));
 * root.render(<Car />);
 */

/** Props
 * Components can be passed as 'props', which stands for properties.
 * Props are like function arguments, and you send them into the component as attributes.
 */
function Shape(props) {
    return <h2>I am a {props.color}</h2>;
}

function CircleShape() {
    return (
        <>
            <Shape color="red"></Shape>
        </>
    );
}

/** Components in Components
 * We can refer to components inside other components.
*/
function ConcreteCircleShape() {
    return (
        <>
            <h1>Concrete Circle Shape</h1>

            <CircleShape></CircleShape>

            <CircleShape />
        </>
    );
}

/**Components in Files
 * React is all about re-using code, and it is recommended to split your components into separate files.
 * To do that, create a new file with a .js file extension and put the code inside it.
 *
 * Note: The filename must start with an uppercase character. Ex: Car.js
 * End of the file, use 'export'.
 *
 * export default Car;
 *
 * To be able to use Car component, you have to import the file in your application.
 *
 * import Car from './Car.js';
 */
