// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import{Pelicula} from './model/pelicula';
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/extrenos.html',
    styleUrls: ['../assets/css/style.css']
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
	public titulo:string   = "Extremos 2017" ;

	public pelicula:Pelicula ;

	public constructor()
	{
		this.pelicula =  new Pelicula(1,"La Odisea", "Homero", 2011)
		this.debug();
	}

	debug()
	{
		// console.log("Pelicula: "+this.pelicula + "Director: "+this.director + " Año: "+this.anio);
		console.log(this.pelicula);
	}

}
