Vue.component('alerta',{
    props: ['tipo', 'posicion'],
    template:'<section class="alerta" :class="[tipo, posicion]">'+
    '<header class="alerta_header"><a href="#" @click="ocultar">cerrar</a><slot name="header">header</slot></header>'+
    '<div class="alerta_contenido">'+
    '<slot>'+
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text'+
    '</slot>'+
    '</div> '+
    '<footer class="alerta_footer"><slot name="footer"> este es el footer</slot></footer>'+
    '</section>',
    methods: {
        ocultar(){
            this.$emit('ocultarw');
        }
    }
});

new Vue({
    el: 'main',
    data:{
        mostrarExito:false,
        mostrarError:false,
        mostrarAdvertencia:false,
    }
   
});