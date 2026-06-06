const name = "swamini";
const repoCount = 50;

console.log(name+repoCount);

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String("swamini-patil");
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-6,-3);
console.log(anotherString);

const myString = "    hello world     "
console.log(myString);
console.log(myString.trim());

const url = "https://www.youtube.com/swamini%20channel"
console.log(url.replace("%20","_"));

console.log(url.includes('patil'));
console.log(url.includes('swamini'));

console.log(gameName.split('-'));





