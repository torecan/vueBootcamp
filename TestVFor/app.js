const vm = Vue.createApp({
    data() {
        return {
            people: [
                {name: "Tore", surname: "Celik", age: 33},
                {name: "John", surname: "Doe", age: 44},
                {name: "Xero", surname: "Xaver", age: 55}
            ]
        }
    },
    methods: { 
        movePeople() {
            this.people.push(this.people.shift());
        }

    }, 
    computed: {
 
    }

}).mount('#app')