import {Injectable} from "angular2/core" ;
import {PELICULAS} from "./mock.pelicula.ts" ;

@Injectable()
export class PeliculaService{

	getPelicula(){
		return 'Pelicula desde service' ;
	}
}