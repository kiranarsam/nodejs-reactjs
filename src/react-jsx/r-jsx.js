/**
 * React JSX
 * What is JSX?
 * JSX stands for JavaScript XML.
 * JSX allows us to write HTML in React.
 * JSX makes it easier to write and add HTML in React.
 *
 * Coding JSX:
 * JSX allows us to write HTML elements in JavaScript and place them in the DOM without
 *  any 'createElement()' and/or 'appendChild()' methods.
 *
 * JSX converts HTML tags into react elements.
 *
 * Note: Not required to use JSX, but JSX makes it easier to write React applications.
 * Examples are
 */

// Example 1: With JSX
const myElementWithJsx = <h1> I Code in JSX!</h1>;

// Example 2: Without JSX
const myElementWithoutJsx = React.createElement('h1', {}, 'I do not use JSX!');

/** In Ex1, JSX allows us to write HTML directly within the JavaScript code.
 * JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.
 */

/**
 * Expressions in JSX:
 * With JSX you can write experssions inside curly braces { }
 *
 * The experssion can be a React variable, or property, or any other valid JavaScript experssion.
 * JSX will execute the expression and return the result
 */
const myExpressionElement = <h1>React is {5 + 5} times better with JSX</h1>;

/** Inserting a Large Block of HTML
 * To write HTML on multiple lines, put the HTML inside parentheses
 */
const myLongListElement = (<ul>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
</ul>);

/**
 * One Top Level Element
 * The HTML code must be wrapped in ONE top level element.
 * Like: wrap elements in top div element.
 */
const myOneTopLevelElement = (
    <div>
        <p>First sentence.</p>
        <p>Second sentence.</p>
    </div>
);

// Note: JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.
/**
 * Alternativly, you can use a "fragment" to wrap multiples lines. This will prevent unnecessarily adding extra nodes to the DOM.
 *
 * A fragment looks like an empty HTML tag: "<> </>"
 * The empty HTML tag is called fragment. (<> </>)
 */
const myFragment = (
    <>
        <p>First sentence.</p>
        <p>Second sentence.</p>
    </>
);

/** Elements Must be Closed
 * JSX allows XML rules, and therefore HTML elements must be properly closed.
 * Close empty elements with '/>'
 */
const myInputElement = <input type="text" />;

// Note: JSX will throw an error if the HTML is not properly closed.

/**Attribute class = className
 * The 'class' attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the 'class' keyword is
 * a reserved word in JavaScript, you are not allowed to use it in JSX.
 */

// Note: Use attribute 'className' instead.
/**
 * JSX solved this by using 'className' instead. When JSX is rendered, it translates 'className' attributes into 'class' attribute.
 */
const myClassAttributeElement = <h1 className="myclass">Hello World!</h1>;

/** Conditions - if statements
 * React supports 'if' statements, but not inside JSX.
 * To be able to use conditional statements in JSX, you should put the 'if' statements outside of the JSX, or you could use a ternary expression instead
 */

const myConditionIfStatement = () => {
    const x = 5;
    let text = "Goodbye";
    if (x < 10) {
        text = "Hello";
    }

    return (
        <>
            <h1>{text}</h1>
        </>
    );
};

const myTernaryExpressionStatement = () => {
    const x = 5;

    return (
        <>
            <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>
        </>
    );
};

// Note: That in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.