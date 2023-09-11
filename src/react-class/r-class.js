/**
 * React Components
 * Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions,
 *  but work in isolation and return HTML via a render() function.
 *
 * Components come in two types, Class components and Function components.
 *
 * When creating a React component, the component's name must start with an upper case letter.
 * The component has to include the 'extends React.Component' statement, this statement
 * creates an inheritance to React.Component, and gives your component access to React.Component's functions.
 *
 * The component also requires a 'render()' method, this method returns HTML.
 */

class MySoloCar extends React.Component {
    render() {
        return <h2>Hi, I am a Solo Car!</h2>;
    }
}

/**
 * Component Constructor
 * If there is a 'constructor()' function in your component, this function will be called when
 *  the component gets initiated.
 *
 * The constructor function is where you initiate the component's properties.
 *
 * In React, component properties should be kept in an object called state.
 *
 * The constructor function is also where you honor the inheritance of the parent component by
 *  including the 'super()' statement, which executes the parent component's constructor function,
 *  and your component has access to all the functions of the parent component ('React.Component').
 *
 * Example:
 * Create a constructor function in the MySoloCar02 component, and add a color property
 * Use the color property in the render() function
 */

class MySoloCar02 extends React.Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }
    render() {
        return <h2>I am a Solo Car 02! {this.state.color} </h2>;
    }
}

/**
 * Props
 * Another way of handling component properties is by using 'props'.
 *
 * Props are like function arguments, and you send them into the component as attributes.
 */

class MySoloCar03 extends React.Component {
    render() {
        return <h2>I am a {this.props.color} Car!</h2>;
    }
}
/** Props usage example:
 * <MySoloCar03 color="red" />
 */

/**
 * Props in the Constructor
 * If your component has a constructor function, the props should always be passed to the constructor
 *  and also to the React.Component via the 'super()' method.
 */
class MySoloCar04 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h2>I am a {this.props.model}!</h2>;
    }
}
/**
 * Usage:
 *
 * <MySoloCar04 model="Ford Mustag" />
 */

/**
 * Components in Components
 * We can refer to components inside other components:
 */
class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <MySoloCar04 model="Ford Mustag" />
            </div>
        );
    }
}

/**
 * If you want use the Garage component in other files, u need to export the class name.
 *
 * export default Garage;
 *
 * To be able to use the Garage component, you have to import the file in your application.
 * import Garage from './Garage.js';
 */

/**
 * React Class Component State
 * React Class components have a built-in 'state' object.
 *
 * You might have noticed that we used 'state' earlier in the component constructor section.
 *
 * The 'state' object is where you store property values that belongs to the component.
 *
 * When the 'state' object changes, the component re-renders.
 *
 *
 * Creating the state Object
 * The state object is initialized in the constructor:
 * Specify the 'state' object in the constructor method:
 * The state object can contain as many properties as you like:
 * Specify all the properties your component need:
 *
 * Using the state Object
 * Refer to the 'state' object anywhere in the component by using the 'this.state.propertyname' syntax.
 *
 * Changing the state Object
 * To change a value in the state object, use the 'this.setState()' method.
 *
 * When a value in the 'state' object changes, the component will re-render, meaning that the output
 *  will change according to the new value(s)
 *
 * Add a button with an onClick event that will change the color property.
 */
class MySoloCar05 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }

    changeColor = () => {
        this.setState({ color: "blue" });
    }

    render() {
        return (
            <div>
                <h1>My Solo Car 05</h1>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}

/**
 * Note:
 * Always use the 'setState()' method to change the state object,
 *  it will ensure that the component knows its been updated and calls the 'render()' method
 *  (and all the other lifecycle methods).
 */
