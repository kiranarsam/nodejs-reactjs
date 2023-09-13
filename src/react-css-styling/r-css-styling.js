/**
 * Styling React Using CSS
 * There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:
 *
 * 1. Inline styling
 * 2. CSS stylesheets
 * 3. CSS Modules
 *
 * Inline Styling
 * To style an element with the inline style attribute, the value must be a JavaScript object:
 *
 * Example:
 * Insert an object with the styling information:
 */
export const Header = () => {
    return (
        <>
            <h1 style={{ color: "red" }}>Hello Style!</h1>
            <p>Add a little style!</p>
        </>
    );
}
/**
 * Note: In JSX, JavaScript expressions are written inside curly braces, and
 *  since JavaScript objects also use curly braces, the styling in the example above is
 *  written inside two sets of curly braces '{{}}'.
 *
 * camelCased Property Names
 * Since the inline CSS is written in a JavaScript object, properties with hyphen separators,
 *  like 'background-color', must be written with camel case syntax:
 *
 * Example:
 * Use backgroundColor instead of background-color:
 */
export const Header02 = () => {
    return (
        <>
            <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
            <p>Add a little style!</p>
        </>
    );
};

/**
 * JavaScript Object
 * You can also create an object with styling information, and refer to it in the style attribute.
 * Example:
 * Create a style object named myStyle:
 */
export const Header03 = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    return (
        <>
            <h1 style={myStyle}>Hello Style!</h1>
            <p>Add a little style!</p>
        </>
    );
};

/**
 * CSS Stylesheet
 * You can write your CSS styling in a separate file, just save the file with the .css file extension,
 *  and import it in your application.
 *
 * App.css:
 * Create a new file called "App.css" and insert some CSS code in it:
 * body {
 *   background-color: #282c34;
 *   color: white;
 *   padding: 40px;
 *   font-family: Sans-Serif;
 *   text-align: center;
 * }
 *
 *  Note: You can call the file whatever you like, just remember the correct file extension.
 *
 * Import the stylesheet in your application as below:
 *
 * import './App.css';
 */

/**
 * CSS Modules
 * Another way of adding styles to your application is to use CSS Modules.
 *
 * CSS Modules are convenient for components that are placed in separate files.
 *
 * Note: The CSS inside a module is available only for the component that imported it,
 *  and you do not have to worry about name conflicts.
 *
 * Create the CSS module with the '.module.css' extension, example: 'my-style.module.css'.
 *
 * Create a new file called "my-style.module.css" and insert some CSS code in it:
 * .bigblue {
 *   color: DodgerBlue;
 *   padding: 40px;
 *   font-family: Sans-Serif;
 *   text-align: center;
 * }
 *
 * Import the stylesheet in your component as below :
 *
 * import styles from './my-style.module.css';
 *
 */
import stylesMycar from './my-style.module.css';

export const MyCar = () => {
    return <h1 className={stylesMycar.bigblue}>Hello Car!</h1>;
}
/**
 * Import the component in your application:
 * <MyCar />
 */
