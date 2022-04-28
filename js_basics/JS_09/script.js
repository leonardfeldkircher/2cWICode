let output = "";
let X = true;

for (let index = 0; index < 20; index++) {
    if (index%4 == 0) {
        console.log(output);
        output = "";

        if (X == true) {
            X = false;
        }
        else {
            X = true;
        }
    }
        if (X == true) {
            output = output + "X";
        }
        else {
            output = output + "0";
        }
}   

var sum = 0;

    for (let index = 0; index < 100; index++) { 
        if (index % 2 == 0) { 
            sum += index;
        }
    }


console.log(sum);
