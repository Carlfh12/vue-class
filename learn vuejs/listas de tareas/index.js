var api = new Vue({
    el: '#api',
    data: {
        mostrartitulo: 1,
        clase: {
            'nuevaclase':true,
            'subrayado':true
        },
        colortexto:'green',
        tamañotexto:'30px',
        message: 'Hello Vue!',
        nuevatarea: '',
        tareas:[
          {nombre: 'hacer algo 1',completado:true},
          {nombre: 'hacer algo 2',completado:true},
          {nombre: 'hacer algo 3',completado:true}
        ],
    },

    beforeUpdate(){
        console.log(this.mostrartitulo)
    },
    updated(){
        console.log(this.mostrartitulo)
    },
    methods: {
        estadotituloUP : function(){
           this.mostrartitulo = 1
        },
        estadotituloDown : function(){
            this.mostrartitulo = 0
         },
        guardartarea : function(tarea) {
            this.tareas.push({nombre:tarea});
            this.nuevatarea = '';
        },
        eliminartarea : function(tarea) {
            if(confirm('eliminar' + tarea.nombre))
            var index = this.tareas.indexOf(tarea);
            this.tareas.splice(index, 1);
        },
        completartarea : function(tarea){
            tarea.completado = !tarea.completado
        }
    },
    computed:{
        tareascomple(){
            return this.tareas.filter((tarea) => tarea.completado)
        }
    }
  })

 