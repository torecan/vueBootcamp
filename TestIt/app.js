const vm = Vue.createApp({
    data() {
        return {
            isBgColor: false,
            fontColorize: '',
            size: 50,
            colors: ['red', 'green', 'blue'],
        }
    },
    methods: { 


    }, 
    computed: {
        bgClass() {
            return {bgColor: this.isBgColor}
        },
        fontColorized() {
            return this.fontColorize
        },
        getFontSize() {
            return Math.round(this.size / 3) + 'px';
        }
    }

}).mount('#app')