/**
 * Class:
 * A class is a type of function, but instead of using the keyword 'function' to initiate it,
 * we use the keyword 'class', and the properties are assigned inside a 'constructor()' method.
 */

const Es6Classes = () => {
    //Example"
    class MyCar {
        constructor(name) {
            this.brand = name;
        }

        present() {
            return 'I have a ' + this.brand;
        }
    }

    const mycar = new MyCar('My Fav Car');

    console.log(mycar.present());

    /** inheritance
     * To create a class inheritance, use the 'extends' keyword
     * A class created with a class inheritance inherits all the methods from another class.
     */

    class MyModelCar extends MyCar {
        constructor(name, model) {
            super(name);
            this.model = model;
        }

        show() {
            return this.present() + ', it is a ' + this.model;
        }
    }

    const mymodelcar = new MyModelCar('My Fav Car', 'Ford');
    console.log(mymodelcar.show());

    /**
     * super() - method refers to the parent class.
     *
     * By calling the super() method in the contructor method, we call the parent's constructor method
     * and get access to the parent's properties and methods.
     */
};

Es6Classes();