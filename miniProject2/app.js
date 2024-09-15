const vm = Vue.createApp({
    data() {
        return {
            colors: ['red', 'blue', 'pink', 'green'],
            selectedColor: 'red',
            fontSize: 20,
            rotate:0
        }
    },
    methods: {
        getRandomColor() {
            if(this.colors && this.colors.length) {
                const randomIndex = Math.floor(Math.random() * this.colors.length);
                console.log(this.colors[randomIndex])
                return this.colors[randomIndex];
            }
            return 'white';
          },
          isSelected(color) {
            if(color == this.selectedColor) {
                return true
            }
            return false
          },
          randomize() {
                this.selectedColor = this.getRandomColor();
                this.rotate = Math.round(Math.random() * 180);
                this.fontSize = Math.round(Math.random() * 200);
          }
    },
    computed: {
        getFontSize() {
            return {
                fontSize: `${this.fontSize}px`
            }
        },
        getRotation() {
            return {
                transform: `rotate(${this.rotate}deg)`
            }
        },
        getBgColor() {
            return {
                backgroundColor: this.selectedColor
            }
        }
    }
    

}).mount('#app')