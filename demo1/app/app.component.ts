// Importar el núcleo de Angular
import {Component} from 'angular2/core';
// import{Pelicula} from './model/pelicula';
import{PeliculasListComponent} from '../app/components/peliculas-list.component';
import{PeliculasFooterComponent} from '../app/components/peliculas-footer.component';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/extrenos.html',
    directives:[PeliculasListComponent,PeliculasFooterComponent],
    // styleUrls: ['../assets/css/style.css'],
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
	public titulo:string   = "Extremos 2017" ;

}
