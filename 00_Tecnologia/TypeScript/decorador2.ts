function Student(config) {
    return function(target) {  Object.defineProperty(
target.prototype,
'course',
{value: () =>config.course}
    )
}

}


@Student({
    course: "curso angular 2"
})

class Persona {
firstName;
lastName;constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;

}

}
let oEstudiante = new Persona("Pepe", "Pérez");
console.log(oEstudiante.course()); // Angular 2