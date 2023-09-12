/**
 * React Props
 * Props are arguments passed into React components.
 * Props are passed to components via HTML attributes.
 *
 * Note: 'props' stands for properties.
 *
 * React Props:
 * React Props are like function arguments in JavaScript and attributes in HTML.
 * To send props into a component, use the same syntax as HTML attributes:
 *
 */

const myElement = <MyCar brand="Swift" />;

/** The component receives the argument as a props object. */
function MyCar(props) {
    return <h2> I am a {props.brand} ! </h2>;
}

/** Pass Data
 * Props are also how you pass data from one component to another, as parameters.
 *
 * Ex: send the 'brand' property from the Garage component to the MyCar component
 */
function Garage() {
    const carName = "Swift";
    const carInfo = { name: "BMW", model: "abc" };

    return (
        <>
            <h1>Who lives in my garage? </h1>
            <MyCar brand={carName} />
            <MyCar02 brand={carInfo} />
        </>
    );
}
/** If you have a variable to send, and not a string as in the example above, you just
 * put the variable name inside curly brackets.
 * Ex: Create a variable named carName and send it to the MyCar component.
 * Check in above example.
 *
 * Or if it was an object
 * check in above example.
 */
function MyCar02(props) {
    return <h2> I am a {props.brand.name} ! </h2>;
}

/**
 * Note: React Props are read-only! You will get an error if you try to change their value.
 */
