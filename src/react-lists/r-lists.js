/**
 * React Lists:
 * In react, you will render lists with some type of loop.
 * The JavaScript 'map()' array method is generally the preffered method.
 *
 *
 */

function MyCar(props) {
    return <li>I am a {props.brand} </li>;
}

function Garage() {
    const cars = ["Swift", "Tata", "BMW"];

    return (
        <>
            <h1>Who lives in my garage? </h1>
            <ul>
                {cars.map((car) => <MyCar brand={car} />)}
            </ul>
        </>
    );
}
/**
 * When you run this code in your create-react-app, it will work but you will receive a warning that
 *  there is no "key" provided for the list items.
 */

/**
 * Keys
 *
 * Keys allow React to keep track of elements. This way, if an item is updated or removed,
 *  only that item will be re-rendered instead of the entire list.
 *
 * Keys need to be unique to each sibling. But they can be duplicated globally.
 *
 * NOTE: Generally, the key should be a unique ID assigned to each item.
 *  As a last resort, you can use the array index as a key.
 *
 * Example:
 * Let's refactor our previous example to include keys:
 */

function MyCar02(props) {
    return <li>I am a {props.brand} </li>;
}

function Garage02() {
    const cars = [
        { id: 1, brand: "Swift" },
        { id: 2, brand: "Tata" },
        { id: 3, brand: "B<W" }
    ];

    return (
        <>
            <h1>Who lives in my garage? </h1>
            <ul>
                {cars.map((car) => <MyCar02 key={car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}