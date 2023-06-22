let sumar = function(a = 4, b = 8){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b + arguments[2];
}
resultado = sumar(3, 2, 9);
console.log(resultado);

let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);


function sumarTodo(){
  let suma = 0
  for(let i=0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}