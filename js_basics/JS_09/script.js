console.log("Example08");
let random = Math.random(0) * 5;
let randomAsInteger = Math.round(random) + 5;
console.log(randomAsInteger);


if (randomAsInteger == 10) {
    console.log("Ten");
}
else if (randomAsInteger == 9) {
    console.log("Nine");
}
else if (randomAsInteger == 8) {
    console.log("Eight");
}
else if (randomAsInteger == 7) {
    console.log("Seven");
}
else if (randomAsInteger == 6) {
    console.log("Six");
}
else {
    console.log("Five");
}
