// Importar el núcleo de Angular
import {Component} from 'angular2/core';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/extrenos.html',
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
	public titulo:string   = "Extremos 2017" ;
	public pelicula:string = "La Iliada - Homero "
	public director:string = "Homero Director" ;
	public anio:number     = 2010 ;

}
