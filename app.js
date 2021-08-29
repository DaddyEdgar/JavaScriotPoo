//Objetos literales
const PeliculaUno = {
    nombre: 'Harry',
    id: 01,

    reproducir() {
        //Para llamar a un objeto, se ocupa una palabra reservada this
        return `reproduciendo pelicula ${this.nombre }`;
    }
}
//console.log(PeliculaUno.reproducir());

//creacion de la clase
class Pelicula {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }

    //Metodo
    reproducir() {
        return `Reproducir esta pelicula... ${this.nombre}`;
    }
}

//Instanciar la clase
const peliculauno = new Pelicula('Una pelicula', 1);
const peliculados = new Pelicula('Dos pelicula', 2);

//console.log(peliculauno);
//console.log(peliculados);


console.log(peliculauno.reproducir());
console.log(peliculados.reproducir());

//Heredar
class Serie extends Pelicula {

    constructor(nombre,id,cap){
        super(nombre,id);
        this.cap = cap;
    }

    reproducircapitulo(){
        return `Reproduciendo esta serie ${this.cap}... ${this.nombre}`;
    }
}

const serieuno = new Serie('Otra serie', 3, 55);
console.log(serieuno.reproducircapitulo());
