const vm = Vue.createApp({
    data() {
        return {
            name: "Tore",
            surname: "Celik",
            age: 33,
        }
    },
    methods: {
        fullName() {
            return `${this.name} ${this.surname.toUpperCase()}`
        }, 
        increment() {
            return this.age++;
        }
    }
}).mount('#app')
