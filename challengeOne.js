/**
 * createHelloWorld - returns "Hello World" 
 * no matter the arguments
 *
 * @return: {function}
 */

const createHelloWorld = function(){
    return function(...args){
        return "Hello World";
    }
}

const f = createHelloWorld();
console.log(f(45));
