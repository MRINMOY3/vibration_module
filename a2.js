"use-strict";

navigator.vibrate(200); // vibrate for 200ms
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]); // Vibrate 'SOS' in Morse.
let g = "Hello";
console.log(typeof g);
console.log(g);
let f = true;
console.log(typeof f);
const s1 = "k";

// llArithmetic logic and comparabel and bolean opearaotr
// arithmetic operator for power i  java script
// lsfl
// fd
//
/**/
// // ?ds
// The new concepts

console.log(2 ** 3);
const first_name = "Mrinmoy";
const last_name = "Bordoloi";

console.log(first_name + " " + last_name);
//We can also have the logical operators
// || && and also we would
// for power we will have

console.log("friend");

console.log(2 ** 3);
const a1 = "Hello";
const a2 = " World";
console.log(a1 + "       " + a2);

//==  and===  are quite similar
const d = `I'am ${first_name},`;
console.log(`I'am ${first_name} , a ${a1 + a2}`);
// Here a new chracter i.e a backtick is used ~~``
const age = 18;
if (age >= 18) {
  console.log("qqo");
}

// The type conversions
const inputyear = "1991";
console.log(Number(inputyear) - 100);
console.log("I am" + 23 + "years old");
// type cohersion -->> these two are con=verted automatically
console.log("13" - "12" - 5);
console.log("23" - "10" - "3");
console.log("23" - "10" + "3"); // considered as a a string bec of + sign
console.log("23" - "10" - "3");
console.log("23" / "10");

let r = "11" / 2;
console.log(r);

/**Thefalse
 * values are as follows -->> 0,'',undefined,null,NaN,false
 *
 *
 *
 *
 */
//

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean(1));

let money = 100;
if (money != 100) {
  console.log("The value of money is 100");
} else {
  console.log("Fin a job");
}

/**To write swecure codes
 * we use -->> strict mode
 * 1>Does not allow the developers to commit some errors accidently
 * 2>
 *
 */

let haslicence = false;
const passText = true;

if (passText) haslicence = true;
if (haslicence) console.log("I can drive");

function h(name) {
  console.log(`My name is ${name}`);
}

h("Mrinmoy bordoloi");

// the anonymous functio in ajavascript

function calcage(birthyear) {
  return 2022 - birthyear;
} // The function declartion

const g1 = calcage(2003);
console.log(g1);

const calculate_age = function calcage(birthyear) {
  return 2022 - birthyear;
};
let g2 = calculate_age(2001);
console.log(g2);
// Or equivalently wecan also write

console.log(calculate_age(1999));
// The function prototype
// An anonymous function wheich
// ? Does not ahve a ptrotypr

// An arrow function
// We use the above when we have a singl;e line of code
// So that we can accommodate in only one line
// We basically do it this way
const calcage2 = (birthyear) => 2022 - birthyear;
// wecall it using
// calage 2-->> function name and the birthyear is thwe argument
console.log(calcage2(1997));

const yearsuntilretirement = (birthyear1, firstname1) => {
  const age = 2022 - birthyear1;
  const retirement = 65 - age;
  return `${firstname1} retires in ${retirement} years`;
};

//The return -->> function we return something in multi ine arow functions
//{} and the return to -->>
r = yearsuntilretirement(1997, "Lmao");
console.log(r);
console.log(yearsuntilretirement(2003, "Mrinmoy bordoloi"));

let a = "Mrinmoy";
console.log(a);

const var_name = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(var_name);
const a11 = ["Micheal", "Hello", "Hey how are you", 4564];
console.log(a11);

console.log(a11[3]);

const friends2 = new Array(1991, 1992, 1993);
console.log(friends2);
console.log(friends2[1]);

const movements = [1, 2, 3.4, 55.23, 2342];
console.log(movements[2]);
let r11 = movements.pop();
console.log(r11);
console.log(movements.pop());
console.log(movements); // to delete the last element

// push-->. to enter a given element
movements.push(12.3); // It dds an element at the last
//It invloves
/**?Th
 * Foloowing criterion
 * push-->. to insert an elementn
 * pop
 */
console.log(movements);

// includes is a boolean type-->> to check whether the given element is present
//or nit
const g_class = movements.includes(200);
console.log(g_class);
if (g_class == false) {
  console.log("The given no is not present");
}

let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2)); // from 2 inclusive it is sicing
console.log(arr);

const h11 = arr.slice(2);
console.log(h11);

const h22 = arr.slice(0, 3); // upto b-1 it will print
console.log(h22);
console.log(-2);

let ga = arr.slice(-6, -1); // b-a-->>(a,b)-->> it is the required
// index uto which it will iterate
console.log(ga);

//splice here we provide the eneding indexqa instead of starting
// and the eneding elements
let ru = [1, 2, 3, 4, 5];
let ki = ru.splice(1, 3);
console.log(ki);
console.log(ru.splice(1, 2)); // Slice returns a new array
// index inclusive
console.log(ru);

let gh = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(gh.reverse());
console.log(arr.join(" " + "and" + " "));

/*for()*/

// the for loops
// It works in the following way

// The following eill illustrate the concept
/// The arrays
// all og thr mehos
/**
 * Fo rof and for each loop
 *
 */

navigator.vibrate(200); // vibrate for 200ms
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]);

let alh_454 = [1, 2, 3, 4, 5, 6, 7, 8];

// The for and the while loops conceptfor(m)

if (5 > 3) {
  console.log("Hello");
}

// The for and while loops
// These loops working

//For and the while loops
const object = {
  first_name: "Mrinmoy",
  last_name: "Bordoloi",
  job: "# Oopen to work",
  birthyear: 2003,
  driver_licence: true,
  calc_age: function () {
    console.log(this);
    return 2022 - this.birthyear;
  },
};

console.log(object.first_name);

// the disadvantage of the dot operatoris as folloes

const name_key = "name";
console.log(object["first_" + name_key]);
//here the [[ ]]  will act as an operatr
// console.log(object);
// console.log(object.calc_age);
// console.log(object["calc_age"]);
const r111 = object.calc_age();
console.log(r111);

/// The for of method

/*
The for of methods
We can iterate tovwr thw entire loops
*/

const movements_1 = [200, 340, 560, 454, 2000, 100, 100];
for (let i = 0; i < movements_1.length; i++) {
  console.log(movements_1[i]);
}
// sequence in which we want to iterate
let gif = ["a", "b", "c", "d", "e", "f", "g"];
let gif1 = [1, 2, 3, "", 4, 5, 6];
for (let m of gif1) {
  m = m + 5;
  console.log(m); // m will hae now the access to all the eleme tnt of
  // the gif array
  m = m - 5;
  if (m > 0) {
    console.log(`The deposit of amount ${m}`);
  } else {
    console.log(`The withdrawal of amount ${m}`);
  }
}

// for of method implementation
arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let m of arr) {
  if (m > 0) {
    console.log(`The amount is greater than 0 and it is ${m}`);
  }
}

// Thefor each method
// It basically takes a call back method
// This is what refereed tomas the call back function
// Calling a function inside some otehr function
arr.forEach(function (m, i) {
  console.log(m, ":", i);
});

function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate(100000000000000);
  } else {
    console.log("Vibration API is not supported");
  }
}
