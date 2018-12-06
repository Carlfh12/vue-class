<template>
    <div>
        <h2 :class="[$style.rojo]">Tareas por hacer</h2>
        <ul>
            <li v-for="tarea in tareasPendientes">
                <a href="#" @click="actualizar(tarea)" v-text="tarea.nombre"></a>
            </li>
        </ul>
        <h2>Tareas hechas</h2>
        <li v-for="tarea in tareasHechas">
            <a href="#" @click="actualizar(tarea)" v-text="tarea.nombre"></a>
        </li>
        <pre>{{ $data }}</pre>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tareas:[
                {nombre:'pescar', completado: false},
                {nombre:'pescar2', completado: false},
                {nombre:'pescar3', completado: false},
                {nombre:'pescar4', completado: false},
                {nombre:'pescar5', completado: false},
                {nombre:'pescar6', completado: false},
            ],
        }
    },   
    methods:{
        actualizar(tarea){
            tarea.completado = !tarea.completado;
        }
    },
    computed: {
        tareasPendientes() {
            return this.tareas.filter((tarea) => !tarea.completado )
        },
        tareasHechas(){
            return this.tareas.filter((tarea) => tarea.completado)
        }
    }
}
</script>
<style scoped>/*scoped css, los estilos pertenecen unicamente a este componente */
    li a{
        color:darkgoldenrod;
        font-weight:  bold;
    }
</style>

<style module>/*module css, los estilos pertenecen unicamente a este componente gracias a asignacion de clases dinamicas */
 
        .rojo {color: red}
    
</style>
