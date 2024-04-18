/**
 * createCounter - increments n by 1
 *
 * @n: parameter to be incremented
 *
 * Return: inremented n
 */

const createCounter = function(n){
    
    return () => {
        return n++;
    }
}

let counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

