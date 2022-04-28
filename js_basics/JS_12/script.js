printMonth(31);
printMonth(28);
printMonth(31);
printMonth(30);
printMonth(31);
printMonth(30);
printMonth(31);
printMonth(31);
printMonth(30);
printMonth(31);
printMonth(30);
printMonth(31);

function printMonth(amountOfDays) {
    let days = "";
for (let index = 1; index <= amountOfDays; index++) {
    if (index<10){
        days = days + " " + index + " ! ";    
    }else {
        days = days + index + " ! "
    }
    
    if (index%7==0){
        console.log(days);
        days = "";  
    }
}

console.log(days);
}


