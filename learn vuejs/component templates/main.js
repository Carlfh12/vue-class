Vue.component('sorteo',{
    props:['listado'],
   
    template: '#template-id',
           
    methods:{
        pickwinner(){
            let cantidad = this.participantes.length;
            let indice = Math.floor(Math.random() * cantidad);
            this.ganador = this.participantes[indice -1];
        }
    },
    data(){
        return{
            ganador:false,
            participantes: this.listado
        }
    },
});

new Vue({
    el:'main',
    data:{
        personas:['carlos','andres','juean','miguel','marcus']
    }
})