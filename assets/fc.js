
function Usuario(nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;

    this.getFullName = function(){
        return `${this.nombre}  ${this.apellido}`
    }
    this.addMascota = function (mascota){
        this.mascotas.push(mascota)
    }
    this.getMascotas = function(){
        return this.mascotas.length;
    }
    this.addBook = function (libro){
        this.libros.push(libro)
    }
    this.getBooks = function(){
        return this.libros.map(element => element.nombre);
    }
}

let juan = new Usuario("Juan","Gónzales",[{ nombre:'Alcano', autor:'Hugo Peralta'}],['perro', 'gato']);
console.log(juan);

// GET FULL NAME
console.log(juan.getFullName());

// ADD MASCOTA
console.log(juan.mascotas);
juan.addMascota("pez");
console.log(juan.mascotas);

// GET MASCOTAS
console.log(juan.getMascotas());

// ADD BOOK
let libro = {
    nombre: 'Los Malos',
    autor: 'Anonimo'
}
juan.addBook(libro);
console.log(juan.libros);

// GET BOOKS
console.log(juan.getBooks());