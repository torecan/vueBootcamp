const vm = Vue.createApp({
    data(){
        return {
            name: "Tore",
            surname: "Celik",
            url: "google.com"
        }
    },
    methods: {
        fullName(){
            return `${this.name} ${this.surname.toUpperCase()}`
        }
    }
}).mount('#app')

