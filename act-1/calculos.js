function suma(num1, num2){
    return num1 + num2;
}

function division(num1, num2){
    return num1 / num2;
}

function valorMayor(array) {
    let mayor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}


console.log(suma(5, 10));
console.log(division(20, 2));
console.log(valorMayor([2,8,9,7,5,6]));