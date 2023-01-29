// Named exports
var name = "Vedant";
let age = 40;
export {name, age};

// Default Exports
var hello = ()=>{
    console.log("Hello Vedant");
}

export default hello;

var hello = ()=>{
    console.log("Hello Vedant")
}

var ahello = (name)=>{
    console.log("Hello " + name)
}

module.exports = {hello, ahello};// same as below line
// module.exports = {hello: hello, ahello: ahello};

// ES6 Module
// ES6 Modules
export const hello = ()=>{
    console.log("Hello vedant")
}

export const ahello = (name)=>{
    console.log("Hello " + name)
}

const vedant = ()=>{
    console.log("Hello " + "vedant")
}

// export default vedant;
 