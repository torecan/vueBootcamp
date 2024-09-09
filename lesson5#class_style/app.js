const vm = Vue.createApp({
    data() {
        return {
            isColorful: false,
            fontColor: '',
            size: 100,
            colors: ['red', 'green', 'blue'],
        }
    },
    methods: {
    //    circle_classes() {
    //         return { colorful: this.isColorful }
    //    }

    },
    computed: {
        bgClass() {
            return { colorful: this.isColorful }
       }, 
       updateFontColor() {
        return this.fontColor
       },
       updateFontSize() {
        return Math.floor(this.size / 3) + 'px';
       }
    },
    // watch: {

    // }
}).mount('#app')

