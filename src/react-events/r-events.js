/**
 * React Events:
 * Just like HTML DOM events, React can perform actions based on user events.
 * React has the same events as HTML: click, change, mouseover etc.
 *
 * Adding Events:
 * React events are written in camelCase syntax:
 * 'onClick' instead of 'onclick'.
 *
 * React event handlers are written inside curly braces.
 * onClick={shoot} instead of onClick="shoot()"
 *
 * React:
 * <button onClick={shoot}> Take the Sanpshot! </button>
 *
 * HTML:
 * <button onclick="shoot()" > Take the Sanpshot! </button>
 *
 * Example:
 * Put the shoot function inside the Football component.
 */

function Football() {
    const shoot = () => {
        console.log("Great wonderful snapshot!");
    };

    return (
        <>
            <button onClick={shoot}>Take the Sanpshot! </button>
        </>
    );
}

/**
 * Passing Arguments:
 * To pass an argument to an event handler, use an arrow function.
 *
 * Ex:
 * Send "Goal!" as a parameter to the shoot function, using arrow function.
 */
function Vollyball() {
    const shoot = (a) => {
        console.log("shoot: " + a);
    };

    return (
        <>
            <button onClick={() => { shoot("smile") }}>Take the Sanpshot!</button>
        </>
    );
}

/** React Event Object
 *
 * Event handlers have access to the React event that triggered the function
 * In our example the event is the "click" event.
 *
 * Example:
 * Arrow function: Sending the event object manually.
 */
function Vollyball02() {
    const shoot = (a, e) => {
        console.log("shoot: " + a);
        console.log("Type of e is = " + e.type);
        // 'b' represents the React event that triggered the function, in this case the 'click' event
    };

    return (
        <>
            <button onClick={(event) => { shoot("smile!", event) }}>Take the Sanpshot!</button>
        </>
    );
}