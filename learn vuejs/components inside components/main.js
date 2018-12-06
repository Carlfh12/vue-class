Vue.component('lista-tareas', {
    props:['tareas'],
    template: '<div><h1><slot></slot></h1>'+
        '<ul><tarea v-for="tarea in tareas" :tarea="tarea"></tarea></ul>'+
    '</div>'
});

Vue.component('tarea',{
    props:['tarea'],
    template:'<li> {{ tarea }} </li>'
});

new Vue({
    el:'main',
    data:{
        tareas: [
            "hacer algo 1",
            "hacer algo 2",
            "hacer algo 3",
            "hacer algo 4"
        ]
    }
});