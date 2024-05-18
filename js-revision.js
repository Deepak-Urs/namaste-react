// regular functions
function x() {
    const a = 10;
}
var xy = 100;
x();

// arrow functions
var y = () => console.log('This is an anonymous function');

const obj = {
    fn1: function() {
        console.log(this)
    },
    fn2: () => {
        console.log(this)
    }
}
obj.fn1() // local obj
obj.fn2() // global obj

function z() {
    console.log('z-',this)
    function y() {
        console.log('y-',this)
        function x() {
            console.log('x-',this)
        }
        x() // global scope
    }
    y() // global scope

}
z() // global scope


// Function borrowing
const obj2 = {
    fn: "Deepak Urs",
    fn1: function() {
        console.log(this.fn) // OP seen
    },
    fn2: () => {
        console.log(this.fn) // scoping issue
    }
}
const nameVal = {fn: "Deepak"}

obj2.fn1()
obj2.fn2()
obj2.fn1.call(nameVal)
obj2.fn2.call(nameVal)
//var object = new obj2()
//object.fn1()
//object.fn2()


/*
INTERVIEWS
1. LUCK
2. Preparation -
    a. Technical
        a) Practice well wrt role
    b. Communication skills
        a) Practice to speak while you are coding
        b) Learn to explain what you are doing, it makes interviewer understand that you know the stuff
        c) Showing collaboration skills in interview is important
        d) Keep english simple and easy for the interviewer to understand
        e) Practice via Mock Interviews
    c. Preparation
        a) Avoid hustling at last moment, be calm
        b) Keep a pen and paper
        c) Have some water to have
        d) Keep devices charged and keep charger ready
        e) Keep Camera 'ON'
        f) Keep phone on silent mode
        g) Have backup internet
    d. CONFIDENCE COMES FROM PREPARATION (from all the above)

*/