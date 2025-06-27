//----JavaScript Arrays----//


// JavaScript Array ২ ভাবে নেয়া যায় //(// best used Recomendated//)
const language1 = ['HTML', 'CSS', 'JavaScript']; 
language1[3] = 'Tailwind Css'; // New Value Change and Add করতে //
language1[4] = 'PHP';
language1[5] = 'Note Js';
// language1[7] = 'React'; (not recomendated because number Serial follow ) //


// Or //
const language2 = new Array ('HTML', 'CSS', 'JavaScript'); //not recomendated //

// Example //
const numb = new Array(50);
console.log(numb); // কারণ new Array তে একটা value নিলে( length) value টাকে count করছে // 
console.log(language1);

console.log(language1[1]); //value নিদিষ্ট মান দেখতে //

console.log(language1.toString()); // Value String দেখাতে চাইলে //

console.log(language1.join('$')); // String কে (,)কমা বাদে অন্য কোন কিছু দিয়ে join করতে চাইলে //

console.log(language1.length); // value total count করতে //

console.log(language1.length-1); // length কমাতে চাইলে //

console.log(language1[language1.length-1]); // সর্বশেষ value দেখতে চাইলে //

//---Last Item Add korta--//
language1.push('Java');

//--Last Item Delete korta--//
language1.pop();

//--- First item Add korta --//
language1.unshift('Basic Computer');

//--- First item Delete korta --//
language1.shift();

// value count number change and সামনে new value add করতে //
language1.splice(2,0,'first','secend'); // value change and add //

language1.splice(0,1)  // value object Delete করতে //
console.log(language1);


//--Name দিয়ে value নিতে চাইলে--//
const person =[];  // এটা Array Recomendated করে না //
person['FirstName'] = 'Alok';  //Name দিয়ে লিখতে চাইলে Object দিয়ে লিখতে হবে //
person['LastName'] = 'Barman';
person['2'] = 'Naogaon';  // সংখ্যা  দিয়ে লিখতে চাইলে Array দিয়ে লিখতে হবে //
person['3'] = 'Rajshahi';
console.log(person);
console.log(person.length); //এটা count হচ্ছে না //
console.log(person[1]); // undefined //
console.log(person[3]);


// All/ সকল Array মান এক সাথে করতে চাইলে //
const a = [1,2,3,4,5];
const b = [6,7,8,9,10];
const c = [11,12,13,14,15];
const d = a.concat(b,c);
console.log(d);


//অনেক গুলো Array থেকে একটা Array (flat) ফ্লাট করতে চাইলে //
const x =[
    [1,2,3,[2,4,6]],
    [4,5,6],
    [7,8,9]
];
console.log(x);
console.log(x.flat());  // flat(ফ্লাট) করতে //
 console.log(x.flat(3));  // flat(ফ্লাট)ভেতরে Array থাকলে // 

