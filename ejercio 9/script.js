function b
function Persona(nombre, edad, genero){
    this.nombre = nombre
    this.edad = edad
    this.genero = genero
}

Persona.prototype.obtDetalle = function(){
    console.log(this.nombre + " tiene " + this.edad + " años" + " y es de género " + this.genero)
}


function Estudiante(nombre, edad, genero, curso,grupo){
    Persona.call(this, nombre, edad, genero)
    this.curso = curso
    this.grupo = grupo
} 

Estudiante.prototype = Object.create(Persona.prototype)


Estudiante.prototype.registrar = function(){
    console.log("Se registró en el curso " + this.curso + " grupo " + this.grupo)
}


function Profesor(nombre, edad, genero, asignatura, nivel){
    Persona.call(this, nombre, edad, genero)
    this.asignatura = asignatura
    this.nivel = nivel
} 

Profesor.prototype = Object.create(Persona.prototype)


Profesor.prototype.asignar = function(){
    console.log("Le asignaron la asignatura " + this.asignatura + " en el nivel " + this.nivel)
}

function eje9(){    
let p1 = new Persona("Persona1", 20, "Masculino");
let e1 = new Estudiante("Estudiante1", 17, "Femenino", "1º", "A");
let pr1 = new Profesor("Profesor1", 29, "Femenino", "Matemática", "3");
console.log(p1.obtDetalle())
console.log(e1.obtDetalle())
console.log(e1.registrar())
console.log(pr1.obtDetalle())
console.log(pr1.asignar())
}
