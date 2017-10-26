// Ejemplo de código en ES6
class Libro {

    constructor(autor, titulo) {
        this.autor=autor;
        this.titulo=titulo;
    }

}
class LibroTecnico extends Libro {
// ...
constructor(autor, titulo, tematica, paginas) {
    super(autor,titulo);
    this.tematica=tematica;
    this.paginas=paginas;
    this.capitulos = [];
    this.precio = 12;

}

 calculaPrecio(pValor = 1) {
    this.precio *=pValor;
    console.log(this);
}
}

let milibro = new LibroTecnico("yo mismo", "angular", "it", 534);
milibro.calculaPrecio();
milibro.editorial="Espasaaaa";
milibro.calculaPrecio(1.16);
