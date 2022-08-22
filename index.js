// Se ingresan numeros y se suman los pares
// se puede hacer con ifs

let numero = 0;
let suma = 0;

alert("Ingresar numeros, se sumara los pares");

numero = parseInt(prompt("Ingrese un numero, para finalizar ingrese 0"));
console.log("Numero ingresado: " + numero);

while (numero != 0) {
  numero = parseInt(prompt("Ingrese un numero, para finalizar ingrese 0"));
  if (numero % 2 === 0) {
    suma += numero;
  }
  console.log("Numero ingresado: " + numero);
}
console.log("La suma de los pares es: " + suma);
alert("La suma de los pares es: " + suma);
