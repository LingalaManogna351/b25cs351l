function outer() {
    let message="welcome to the Node.js";
    function inner(){
        console.log(message);
    }
    return inner;
}
const callback=outer();
callback();