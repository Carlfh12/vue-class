//ejemplo de hacer filtro  fuera de computed
Vue.filter('alReves',(valor) => valor.split('').reverse().join('')),
//fin ejemplo
 new Vue({
    el: '#main',
    data:{
        minimo:5,
        busqueda:'',
        juegos:[
            {
                titulo:'empires',
                genero:'estrategia',
                puntuacion:8
            },
            {
                titulo:'DOA',
                genero:'RPG',
                puntuacion:9
            },
            {
                titulo:'REV5',
                genero:'Survival Horror',
                puntuacion:8
            },
            {
                titulo:'Warcraft',
                genero:'estrategia',
                puntuacion:10
            },
        ]
    },
    computed: {
      /*  mejores(){
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
        },*/
        buscar(){
            return this.juegos.filter((juego) =>( juego.titulo.includes(this.busqueda) | juego.genero.includes(this.busqueda) && juego.puntuacion >= this.minimo  ))
        }
    }
});
