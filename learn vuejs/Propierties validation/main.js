Vue.component('candidato',{
    props:{
        nombre:{
            type: String, //[string,array] o null = cualquier tipo
            required:true
        },
        correo: {
            type: String,
            default: 'nani'
        },
        imagen: String,
        location: {
            type: Object,
            default(){
                return{
                    ciudad: 'cualquiera'
                }
            }
        }
    },
    template:'#candidato-template'
})
new Vue({
    el:'main',
    mounted() {
        this.obtenercandidatos();
    },
    data:{
        candidatos:[]
    },
    methods:{
        obtenercandidatos(){
            axios.get('https://randomuser.me/api/?results=50')
                .then((respuesta) => {
                    this.candidatos = respuesta.data.results
                })
        }
    }
})