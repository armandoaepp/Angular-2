// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import{Pelicula} from '../model/pelicula';


@Component({
    selector: 'peliculas-list',
    templateUrl: 'app/views/peliculas-list.html',
    styleUrls: ['../assets/css/style.css']
})

// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent {

	public pelicula:Pelicula ;
	public mostrarDatos:boolean ;
	public peliculas ;

	public constructor()
	{
		this.mostrarDatos =  true ;
		this.pelicula =  new Pelicula(1,"La Odisea", "Homero", 2011)
		this.debug();

		this.peliculas = [
							new Pelicula(1,"La Odisea 1", "Homero", 2010),
							new Pelicula(2,"La Odisea 2", "Homero", 2011),
							new Pelicula(3,"La Odisea 3", "Homero", 2012),
							new Pelicula(4,"La Odisea 4", "Homero", 2013),
							new Pelicula(5,"La Odisea 5", "Homero", 2014),
							new Pelicula(6,"La Odisea 6", "Homero", 2015),
						] ;
	}

	debug(titulo =  null )
	{
		if(titulo != null) {
			console.log(this.pelicula.titulo);
		}
		else
		{
			console.log(this.pelicula);
		}
		// console.log("Pelicula: "+this.pelicula + "Director: "+this.director + " Año: "+this.anio);
	}
	onShowHide()
	{
		this.mostrarDatos =  !this.mostrarDatos ;
	}

}