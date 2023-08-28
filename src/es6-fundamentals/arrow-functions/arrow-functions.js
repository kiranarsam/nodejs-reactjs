/**
 * Arrow Functions and this keyword:
 * Arrow functions allow us to write shorter function
 *
 */

const Es6ArrowFunctions = () => {

    const hello11 = function () {
        return "Hello World!";
    }

    console.log(hello11());

    /** Arrow Functions */
    const hello22 = () => {
        return "Hello World!";
    }
    console.log(hello22());

    /**
     * It gets shorter! If the function has only one statement, and the statement returns a value,
     * you can remove the brackets and the return keyword.
     * Return Value by Default
     * Note: This works only if the function has only one statement.
     */
    const hello33 = () => "Hello World!";
    console.log(hello33());

    /** If you have parameters, you pass them inside the parentheses
     * Arrow function with parameters
     * In fact, if you have only one parameter, you can skip the parentheses as well
     */
    const hello44 = (val) => "Hello " + val;
    console.log(hello44());

    const hello55 = val => "Hello " + val;
    console.log(hello55);

    /** this keyword
     * What About this?
     * The handling of 'this' is also different in arrow functions compared to regular functions.
     * In short, with arrow functions there is no binding of 'this'.
     *
     * In regular functions the 'this' keyword reperesented the object that called the function, which
     * could be the window, the document, a button or whatever.
     *
     * With arrow functions, the 'this' keyword always represents the object that defined the arrow function.
     *
     *
     */
    // Example: With regular function, 'this' repersents the object that called the function

};

Es6ArrowFunctions();