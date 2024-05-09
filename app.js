const vm = Vue.createApp({
    data(){
        return {
            name: "Tore",
            surname: "Celik"
        }
    },
    methods: {
        fullName(){
            return `${this.name} ${this.surname}`
        }
    }
}).mount('#app')


// Vue.createApp({
//     data(){
//         return {
//             name: "Tore",
//             surname: "Celik"
//         }
//     }
// }).mount('#app2')
