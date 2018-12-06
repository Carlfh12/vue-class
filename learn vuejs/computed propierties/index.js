var vm = new Vue({
    el: '#main',
    data: {
        nombre:'',
        edad:'',
        sexo:'',
        email:'',
        tareas:[{
            titulo:'hacer algo1',
            prioridad:true,
            antiguedad:23
        },
        {
            titulo:'hacer algo2',
            prioridad:false,
            antiguedad:40
        },
        {
            titulo:'hacer algo3',
            prioridad:true,
            antiguedad:60
        },
        {
            titulo:'hacer algo4',
            prioridad:false,
            antiguedad:10
        },
        ]
    },
    methods: {
        enviar: function(_evt){
           // _evt.preventDefault();
            alert("enviando")
        },

        tecla : function(_evt){
            console.log(_evt.code)
        }
    },
//un metodo se evalua de manera constante cada vez que se llama y las computed solo se evaluan cuando cambian las dependencias
    computed: {
        estatodo: function(){
            return this.nombre && this.edad && this.sexo && this.email;
        },
        prioridadtarea(){
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        antiguedadtarea(){
            return this.tareas.sort((a,b) => b.antiguedad - a.antiguedad)
        }
    }
}); 