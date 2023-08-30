/**
 * Variables:
 * With ES6, there are three ways of defining your variables: var, let, and const
 *
 * use 'var' outside of a function, it belongs to the global scope.
 * use 'var' inside aof a function, it belongs to that function.
 * use 'var' inside of a block, i.e., a for loop, the variable is still available outside of that block.
 *
 * Note: 'var' has a function scope, not a block scope.
 *
 *
 * 'let' is the block scoped version of 'var', and is limited to the block (or expression) where it is defined.
 * use 'let' inside of a block, i.e., a for loop, the variable is only available inside of that loop.
 * Note: 'let' has a block scope.
 *
 *
 * 'const' is a variable that once it has been created, its value can never change.
 * Note: 'const' has a block scope.
 *
 * The keyword const is a bit misleading.
 * It does not define a constant value. It defines a constant reference to a value.
 *
 * Because of this you can NOT:
 *      Reassign a constant value
 *      Reassign a constant array
 *      Reassign a constant object
 *
 * But you CAN:
 *      Change the elements of constant array
 *      Change the properties of constant object
 *
 */