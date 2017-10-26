// Ejemplo de código en typescript
interface datosLibro 
{
     tematica; /* sin definir el tipo */
     paginas: string | number; /* vale como numero y cadena */
     capitulos: Array<string>; /* tambien se puede usar  */
     anexos: string[]; /* otra  forma  de array*/
     precio:  number;
     calculaPrecio(): void;

};
class Libro   {

    
    public autor: string;
    public titulo: string;

    constructor(_autor, _titulo) {
        this.autor=_autor;
        this.titulo=_titulo;
    }
}

/** lo mismo pero comprimido   */
class libro2{
    constructor (public autor:string, protected titulo:string)
    {
        this.autor=autor;
        this.titulo=titulo;
    }
}
class LibroTecnico extends Libro implements datosLibro {
// ...
public tematica;
public paginas;
public capitulos;
public anexos;
public precio;

constructor(autor, titulo, tematica, paginas) {
    super(autor,titulo);
  /*  this.tematica=tematica;
    this.paginas=paginas;
    this.capitulos = [];
    this.precio = 12;
*/
}

 public  calculaPrecio(pValor = 1) {
    this.precio *=pValor;
    console.log(this);
  //  return this;
}
}

let milibro = new LibroTecnico("yo mismo", "angular", "it", 534);
milibro.calculaPrecio();
//milibro.editorial="Espasaaaa";
milibro.calculaPrecio(1.16);
