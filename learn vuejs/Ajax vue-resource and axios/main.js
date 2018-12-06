Vue.prototype.$http = axios; // sirve para remplazar vue resource por axios, sin sobreescribir codigo, exceptuando la reglas del api(cambiar body por data) 

new Vue({
    el:'main',
    mounted(){
        this.cargarPerfil();
        console.log('todo arriba');
    },
    data:{
        perfiles: []
    },
    methods:{
       
        cargarPerfil(){
             /*
            this.$http.get('https://randomuser.me/api/?results=50')
            .then((respuesta) => {
                this.perfiles = respuesta.body.results
                console.log(respuesta)
           
            });
            */
           axios.get('https://randomuser.me/api/?results=50')
            .then((respuesta) => {
                this.perfiles = respuesta.data.results
                console.log(respuesta)
            })
        }
    }
}) 