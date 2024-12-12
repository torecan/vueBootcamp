const vm = Vue.createApp({
    data() {
        return {
            remainingGuesses: 3,
            guess: 1,
            exactNumber: 0,
            message: ""
        }
    },
    methods: {
        init() {
            console.log("new number");
            this.exactNumber = Math.floor(Math.random() * 100);
            this.remainingGuesses = 3;
            this.message = "";
        },
        checkGuess: _.debounce( function() {
            
            
            if(this.remainingGuesses == 0) {
                this.message = "You've run out of guesses!";
                return;
            }
            
            if(this.guess == this.exactNumber) {
                this.message = "You found the exact number!";
            } else if(this.guess < this.exactNumber) {
                this.message = "Up! ";
            } else if(this.guess > this.exactNumber) {
                this.message = "Down!";
            } else {
                this.message = "Please enter a number between 1 and 100";
            }
            this.remainingGuesses--;
          
        }, 2000),
    },
    computed: {
       
    },
    mounted() {
        this.init();
    }
}).mount('#app')