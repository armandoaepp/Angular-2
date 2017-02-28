// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import{Pelicula} from './model/pelicula';
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/extrenos.html',
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
	public titulo:string   = "Extremos 2017" ;
	public pelicula:string ;
	public director:string ;
	public anio:number     ;

	public constructor()
	{

		this.titulo   = "Extremos 2017" ;
		this.pelicula = "La Iliada - Homero ";
		this.director = "Homero Director" ;
		this.anio     = 2010 ;
	}

	holaMundo()
	{
		alert("Pelicula: "+this.pelicula + "Director: "+this.director + " Año: "+this.anio);
	}

}
