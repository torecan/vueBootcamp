const vm = Vue.createApp({
    data() {
        return {
            name: "Tore",
            midName: "",
            surname: "Celik",
            age: 33,
        }
    },
    methods: {
        fullName() {
            return `${this.name} ${this.midName} ${this.surname.toUpperCase()}`
        }, 
        increment() {
            return this.age++;
        }, 
        updateSurname(message, event) {

            if(event)
                this.surname = event.target.value;
            
            console.log(message)
    
        }, 
        updateMiddleName(event) {
            this.midName = event.target.value;
        }
    }
}).mount('#app')
