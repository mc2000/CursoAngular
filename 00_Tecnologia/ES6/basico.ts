// Ejemplo de código en ES6
var data = [{precio: 12}, {precio: 34}, {precio: 19}];

//es5
data.forEach(function (elem){ elem.precio++});

//es6
data.forEach(elem => elem.precio++ );

//es6
data.forEach( elem =>{
if(true) {
const iva = 1.16;

let precioFinal = elem.precio * iva;
console.log(`
Oferta:
El precio final es ${precioFinal}`);
}
});