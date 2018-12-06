Vue.component('contrase',{
    props:['password'],
    template:'<input :value="password" @input="comproabr($event.target.value)" ref="pass">',
    methods:{
        comproabr(password){
           if(this.novalidas.includes(password)){
              this.$refs.pass.value = password = '';
           }
           this.$emit('input', password)
           
        }
    },
    data(){
        return {
            novalidas:['abc','admin','root']
        }
    },
});

new Vue({
    el: 'main',
    data: {
        password:'1234'
    },
});