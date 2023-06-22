//Manera antigua, actualmente no se usa
//let autos = new Array('Ferrari', 'Audi', 'Renault')
console.log(autos)

//La forma que se usa ahora
const cars = ['Ferrari', 'Audi', 'Renault']
console.log(autos)

//Para ver los elementos
//el primer elemento es de indiice 0
console.log(cars[0])
console.log(cars[2])

//recorrerlo con un for
for(let i = 0; i < cars.length; i++) {
  console.log(`Elemento ${i+1}: ${cars[i]}`)
}

// Modificar los elementos
cars[1] = 'Volvo'
console.log(cars[1])

//agregar nuevos valores al array con PUSH
cars.push('Audi')
console.log(cars)

//otro modo con lenght
cars[cars.length] = 'Porche'
console.log(cars)

//Otra forma, esta NO utilizar
//autos[6] = 'Tenault'
//console.log(cars)

//Preguntar si es un array
console.log(Array.isArray(cars)) // devuelve boolean

//Pregunta si la varaible es una instancia de la clase Array
console.log(cars instanceof Array)