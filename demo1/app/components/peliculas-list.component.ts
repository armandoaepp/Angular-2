// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import{Pelicula} from '../model/pelicula';
import{PeliculaService} from '../services/peliculaService';


@Component({
    selector: 'peliculas-list',
    templateUrl: 'app/views/peliculas-list.html',
    providers:[PeliculaService] ,
})

// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent {

	public peliculaElegida:Pelicula ;
	public pelicula:Pelicula ;
	public mostrarDatos:boolean ;
	public peliculas ;

	public datoService ;

	public constructor(private _peliculasService:PeliculaService)
	{
		this.datoService = this._peliculasService.getPelicula();
		console.log(this.datoService);
		this.mostrarDatos =  true ;

		this.debug();

		this.peliculas = [
							new Pelicula(1,"La Odisea 1", "Homero", 2010),
							new Pelicula(2,"La Odisea 2", "Homero", 2011),
							new Pelicula(3,"La Odisea 3", "Homero", 2012),
							new Pelicula(4,"La Odisea 4", "Homero", 2013),
							new Pelicula(5,"La Odisea 5", "Homero", 2014),
							new Pelicula(6,"La Odisea 6", "Homero", 2015),
						] ;
		this.pelicula =  this.peliculas[0];
		this.peliculaElegida =  this.peliculas[0];
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

	onCambiarPelicula(pelicula){
		this.pelicula =  pelicula ;
		this.peliculaElegida =  pelicula ;
	}

}