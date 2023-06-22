const persona = {
    nombre: "Juan",
    apellido: "Lopez"
}
console.log(persona);

function cambiarObjeto(p1) {
    p1.nombre = 'Ignacio'
    p1.apellido = 'Perez'
}
cambiarObjeto(persona);

console.log("persona luego de cambiarObjeto: ");
console.group(persona);