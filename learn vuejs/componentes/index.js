Vue.component('cita',{
    template: ' <div>'+
    '<div class="citar" v-for="citus,index in citas" :key="index">'+
    '<h1>{{  citus.body }}- {{ index }}</h1>'+
    '<h2 v-if="citus.likes > 0">{{citus.likes}}</h2>'+
    '<button @click="darlike(citus)">Like</button>'+
    '<button @click="dislike(citus)">Dislike</button>'+
    '</div>'+
    '</div>',

    mounted: function(){
        this.elegircita();
    },

    data: function(){
       return{
        mostrarcita:'',
        likes:2,
        citas:[
            {
                body:'"Solo hay una felicidad en la vida – amar y ser amado" - George Sand.',
                likes:0
            },{
                body: '"Siempre es temprano para rendirse" - Norman Vincent Peale.',
                likes:0
            },{
                body:'"La fortuna favorece al valiente" - Virgilio.',
                likes:0
            },{
                body:'"Tienes que hacer que ocurra" - Denis Diderot.',
                likes:0
            }
        ]
       }
    },

    methods:{
        elegircita: function(){
            var cita = this.citas[Math.floor(Math.random() * this.citas.length )]
            this.mostrarcita = cita;
        },

        darlike: function(citus){
         citus.likes = citus.likes + 1
           
        },

        dislike: function(citus){
            if(citus.likes > 0){
            citus.likes = citus.likes - 1
            }
        }
    }
});

new Vue({
    el:'#main',

    
});