var array1 = new Array(4);

var array2 = [];

var array3 = [1, 2, 6, 8, 7];


array2[0] = "Pepe";
array1[0] = "Eva";


array3 = array3.concat(array2);
array3.push("Hola Don Pepito");

//los arrays en javascript pueden contener cualquier tipo de elementos ya que no hay tipos en javascript
array3.splice(2,2,"adios","don","jose");
//aqui el splice toma el primer número como posición inicial y borra tantos elemntos del array como le indique el segundo número, y el resto de elementos los inserta en esa posición indicada

for (i = 0; i < array3.length; i++) {
    document.write(array3[i] + "<br/ >");
}

alert(i);