// Importar el núcleo de Angular
import {Component} from 'angular2/core';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    template: `<h1> {{titulo}} </h1>
				    <ul>
						<li> Titulo : <strong>{{pelicula}}</strong> </li>
						<li> Director: <strong>{{director}}</strong> </li>
						<li> Año: <Strong>{{anio}}</Strong> </li>
					</ul>
    		    	` ,
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
	public titulo:string   = "Extremos 2017" ;
	public pelicula:string = "La Iliada - Homero "
	public director:string = "Homero Director" ;
	public anio:number     = 2010 ;

}
