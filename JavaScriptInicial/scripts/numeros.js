var n1 = prompt("Dime el numero 1");
var n2 = prompt("Dime el numero 2");

if (!isNaN(n1) && !isNan(n2)) {

    alert("Error, solo numeros")

}
else {

    var n3 = n1 + n2;

    if (isFinite(n3)) {
        alert(n3);

    }
    else {
        alert("La operacion es Infinita");
    }
}