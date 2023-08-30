
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
// Example: With regular function, 'this' represents the object that called the function

const es6This = function () {
    class Header {
        constructor() {
            this.color = 'Red';
        }

        // regular function
        changeColor = function () {
            console.log("change color reg: " + this);
            document.getElementById('demo-reg').innerHTML += this;
        }
    }

    const myheader = new Header();

    // The window object calls the function:
    window.addEventListener('load', myheader.changeColor);

    // A button object calls the function
    document.getElementById('btn-reg')?.addEventListener("click", myheader.changeColor);
}

es6This();

// With an arrow function, this represents the Header object no matter who called the function:

const es6WithArrowThis = function () {
    class Header {
        constructor() {
            this.color = 'red';
        }

        // Arrow function:
        changeColor = () => {
            console.log("change color arrow: " + this);
            document.getElementById('demo-arrow').innerHTML += this;
        }
    }

    const myheader = new Header();


    //The window object calls the function:
    window.addEventListener("load", myheader.changeColor);

    //A button object calls the function:
    document.getElementById("btn-arrow")?.addEventListener("click", myheader.changeColor);
}
es6WithArrowThis();