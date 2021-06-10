class Usuario{
    cantidad = 0;
    libros = {};
    mascotas = [];
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        Usuario.cantidad++
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    getMascotas() {
        return this.mascotas.length;
    }
    addBook(libro){
        this.libros.push(libro);
    }
    getBooks(){
        return this.libros;
    }
}


let juan = new Usuario("Juan","Gónzales",[{ nombre:'Alcano', autor:'Hugo Peralta'}],['perro', 'gato']);

console.log(juan);

// GET FULL NAME
console.log(juan.getFullName());

// ADD MASCOTA
console.log(juan.mascotas);
juan.addMascota('pez');
console.log(juan.mascotas);

// GET MASCOTAS
console.log(juan.getMascotas());

// ADD BOOK
console.log(juan.libros);
let libro = {
    nombre: 'Los Malos',
    autor: 'Anonimo'
}
juan.addBook(libro);
console.log(juan.libros);

// GET BOOKS
console.log(juan.getBooks());
