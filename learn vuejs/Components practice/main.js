Vue.component('lista-all',{
    template:'#perfiles-template',
    mounted(){
        axios.get('https://randomuser.me/api/?results=50')
            .then((respuesta) => {
                const lista = respuesta.data.results.map((perfil) => {
                    return{
                        nombre: `${perfil.name.title}  ${perfil.name.first} ${perfil.name.last}`,
                        correoe: perfil.email,
                        foto: perfil.picture.medium
                    }

                    this.perfiles
                });
                this.perfiles = lista
                console.log(respuesta)
            })   
    },
    data(){
        return{
            perfiles:[],
            busqueda:'',
        }
    },
    computed:{
        filtrado(){
            return this.perfiles.filter((perfil) => {
                return perfil.nombre.includes(this.busqueda)
            })
        }
    }
}) 

Vue.component('perfil', {
    props:['datos'],
    template:'#perfil-template'
});

new Vue({
    el:'main',
});