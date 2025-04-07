function boton(){
     function boton(){
   
    function Persona(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    
   
    Persona.prototype.obtDetalles = function() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`;
    };
    
    
    function Estudiante(nombre, edad, genero, curso, grupo) {
        
        Persona.call(this, nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    
    
    Estudiante.prototype = Object.create(Persona.prototype);
    Estudiante.prototype.constructor = Estudiante;
    
   
    Estudiante.prototype.registrar = function() {
        return `Registrado en el curso: ${this.curso}, Grupo: ${this.grupo}`;
    };
    
    
    function Profesor(nombre, edad, genero, asignatura, nivel) {
        
        Persona.call(this, nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    
   
    Profesor.prototype = Object.create(Persona.prototype);
    Profesor.prototype.constructor = Profesor;
    
    
    Profesor.prototype.asignar = function() {
        return `Asignatura: ${this.asignatura}, Nivel: ${this.nivel}`;
    };
    
    
    const estudiante1 = new Estudiante("Carlos", 20, "Masculino", "Matemáticas", "1A");
    const profesor1 = new Profesor("Ana", 35, "Femenino", "Física", "Superior");
    
  
    console.log(estudiante1.obtDetalles()); 
    console.log(estudiante1.registrar());   
    
    console.log(profesor1.obtDetalles());   
    console.log(profesor1.asignar());       
    
}
}
