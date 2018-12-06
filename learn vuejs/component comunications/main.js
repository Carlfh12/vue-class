const eventBus = new Vue();
Vue.component('listado-productos',{
    props:['productos'],
    template:
        '<section>'+
            '<ul>'+
                '<li v-for="producto in productos">'+
                    '{{ producto.nombre }}'+ '-'+
                    '<small>{{ producto.precio.toFixed(2) }} €</small>'+
                    '<button @click="eliminarProducto(producto)">-</button>'+
                    '<button @click="añadirProducto(producto)">+</button>'+
                '</li>'+
            '</ul>'+
        '</section>',
    methods:{
        añadirProducto(producto){
            eventBus.$emit('añadir', producto);
        },
        eliminarProducto(producto){
            eventBus.$emit('eliminar', producto);
        }
    }
});

Vue.component('carrito-compra',{
    template:
        '<section>'+
            '<h1>{{ total.toFixed(2) }} $ </h1>'+
            '<h3>{{ cantidadProductos }} productos</h3>'+
        '</section>',
    data(){
        return{
            cantidadProductos: 0,
            total: 0,
            listacarrito:[],
            datico:0,
        }
    },
    created() {
        eventBus.$on('añadir', (producto) => {
            if( this.total >= 0){
                this.total += producto.precio;
                this.cantidadProductos = this.listacarrito.length+1
                this.listacarrito.push({nombre:producto.nombre, precio:producto.precio})
            }
        });
        eventBus.$on('eliminar', (producto) => {
            if (this.total > 0){
                for(var i = 0; i < this.listacarrito.length; i++){
                    if(this.listacarrito[i].nombre == producto.nombre){ this.datico = i;
                        this.total -= producto.precio;
                        this.listacarrito.splice(this.datico, 1);
                        this.cantidadProductos = this.listacarrito.length
                        console.log(this.listacarrito)
                        break;
                    
                    }
                }
               
            }
        });
    }
});

new Vue({
    el: 'main',
    data: {
        productos:[
            {nombre: 'Libro ES6', precio: 39},
            {nombre: 'Portátil', precio: 1300},
            {nombre: 'Café', precio: 2},
            {nombre: 'Auriculares', precio: 80},
            {nombre: 'Moleskine', precio: 19},
        ]
    }
})