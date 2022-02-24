let random = Math.random() * 1000;
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);

if (randomAsInteger > 800) {
    console.log("Bigger then 800");
}
else if (randomAsInteger > 500 && randomAsInteger < 800) {
    console.log("Zwischen 500 und 800");
}
else if (randomAsInteger > 200 && randomAsInteger < 500) {
    console.log("Zwischen 200 und 500");
}
else {
    console.log("Kleiner als 200")
}

