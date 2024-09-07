Vue.createApp({
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
        }
    }
}).mount('#app')
