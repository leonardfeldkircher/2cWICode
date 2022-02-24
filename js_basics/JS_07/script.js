console.log("Example07");
let random1 = Math.random() * 100;
let randomAsInteger1 = Math.round(random1);
console.log(randomAsInteger1);

let random2 = Math.random() * 100;
let randomAsInteger2 = Math.round(random2);
console.log(randomAsInteger2);

// && und
// || oder

if ((randomAsInteger1 < randomAsInteger2) && (randomAsInteger1 < 50)) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
else if (randomAsInteger1 < 30 || randomAsInteger2 < 30) {
    console.log("Eine der beiden ist kleiner als 30");
}
else if (randomAsInteger1 < 50 && randomAsInteger2 != 50) {
    console.log("Erste Zahl klein zweite kein 50er");
}
else {
    console.log(" ")
}