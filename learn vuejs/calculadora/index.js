new Vue({
   el:"#main",
   data:{
       operacion:'',
       numeros:[1,2,3,4,5,6,7,8,9,0],
       signos:['+','/','*','-']
   }, 
   methods:{
    atraparnumero:function(numero){
        this.operacion=this.operacion+eval(numero.srcElement.textContent)
    },
    atraparsigno:function(signo){
        this.operacion=this.operacion+signo.srcElement.textContent
    },
    resultado:function(){
        this.operacion=eval(this.operacion)
    }

   }
});