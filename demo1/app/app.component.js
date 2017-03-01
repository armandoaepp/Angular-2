System.register(['angular2/core', './model/pelicula'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pelicula_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = "Extremos 2017";
                    this.mostrarDatos = true;
                    this.pelicula = new pelicula_1.Pelicula(1, "La Odisea", "Homero", 2011);
                    this.debug();
                    this.peliculas = [
                        new pelicula_1.Pelicula(1, "La Odisea 1", "Homero", 2010),
                        new pelicula_1.Pelicula(1, "La Odisea 2", "Homero", ""),
                        new pelicula_1.Pelicula(1, "La Odisea 3", "Homero", 2012),
                        new pelicula_1.Pelicula(1, "La Odisea 4", "Homero", 2013),
                        new pelicula_1.Pelicula(1, "La Odisea 5", "Homero", 2014),
                        new pelicula_1.Pelicula(1, "La Odisea 6", "Homero", 2015),
                    ];
                }
                AppComponent.prototype.debug = function (titulo) {
                    if (titulo === void 0) { titulo = null; }
                    if (titulo != null) {
                        console.log(this.pelicula.titulo);
                    }
                    else {
                        console.log(this.pelicula);
                    }
                    // console.log("Pelicula: "+this.pelicula + "Director: "+this.director + " Año: "+this.anio);
                };
                AppComponent.prototype.onShowHide = function () {
                    this.mostrarDatos = !this.mostrarDatos;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/views/extrenos.html',
                        styleUrls: ['../assets/css/style.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map