const modelo = {
    usuarios:{
        nombre:'carlos',
    }
}
new Vue({
    el:'#app1',
    data: modelo,
});
new Vue({
    el:'#app2',
    data:modelo,
});