class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }
    
    getFullName() {
        return '${this.nombre} ${this.apellido}'
    }

    addMascota(Mascota) {
        this.mascotas.push(Mascota)
    }

    countMascota() {
        return this.mascotas.length
    }

    addBook(nombreLibro, nombreAutor) {
        this.libros.push({libro: nombreLibro, autor: nombreAutor})
    }

    getBookNames() {
        return this.libros.map(nombreLibro => nombreLibro.libro)
    }
}
let usuario = new Usuario("Gabriel", "Gomez")
usuario.addMascota('Perro')
usuario.addMascota('Pez')
usuario.addBook('100 años de Soledad', 'Gabriel Garcia Marquez')
usuario.addBook('Drakula', 'Bram Stroker')
