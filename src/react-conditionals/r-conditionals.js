/**
 * React Conditional Rendering:
 *
 * In React, you can conditionally render components.
 * There are serveral ways to do this.
 *
 * 'if' Statement
 * We can use the 'if' JavaScript operator to decide which component to render.
 */

function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>GOAL !</h1>;
}

/** Now, we'll create another component that chooses which component to render based on a condition. */
function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}

/** Try changing the 'isGoal' attribute to 'true'
 *
 * <Goal isGoal={true} />
*/

/**
 * Logical && Operator:
 * Another way to conditionally render a React component is by using the '&&' operator.
 *
 * Ex: We can embed JavaScript expressions in JSX by using curly braces:
 */
function Garage(props) {
    const cars = props.cars;

    return (
        <>
            <h1>Garage</h1>
            {
                cars.length > 0 &&
                <h2>
                    You have {cars.length} cars in your garage.
                </h2>
            }
        </>
    );
}

/** If 'cars.length > 0' is equates to true, the expression after '&&' will render.
 * Try emptying the cars array.
 *
 * const cars = [];
 * <Garage cars={cars} />
 *
 * const cars = ["Swift"];
 * <Garage cars={cars} />
 */

/**
 * Ternary Operator:
 * Another way to conditionally render elements is by using a ternary operator.
 * Syntax:
 *  condition ? true : false
 *
 * we will go back to the goal example
 * Ex:
 * Return the MadeGoal component if isGoal is true, otherwise the MissedGoal component:
 *
 */

function Goal02(props) {
    const isGoal = props.isGoal;

    return (
        <>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    );
}