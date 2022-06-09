let randomnumber = 0;
for (let count = 10; count > 0; count--) {
let random = Math.random() * 100;
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);
randomnumber = randomnumber + randomAsInteger;
}

console.log(" Die Summe der 10 Zufallszahlen ist" + randomnumber);

