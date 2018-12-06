/*
Vue.component('alerta',{
    props: ['tipo', 'posicion'],
    template:'<section class="alerta" :class="[tipo, posicion]">'+
    '<header class="alerta_header"><slot name="header">header</slot></header>'+
    '<div class="alerta_contenido">'+
    '<slot>'+
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text'+
    '</slot>'+
    '</div> '+
    '<footer class="alerta_footer"><slot name="footer"> este es el footer</slot></footer>'+
    '</section>',
});
*/
Vue.component('mis-tareas', {
    props: ['listado'],
    template: '#mis-tareas-template'
});

new Vue({
    el: 'main',
    data: {
        tareas: [
            { titulo: 'Salir a correr'},
            { titulo: 'Recoger la casa'},
            { titulo: 'Aprender Vue.js'},
            { titulo: 'Ir al gimnasio'},
            { titulo: 'Leer cada día'},
        ]
    }
});