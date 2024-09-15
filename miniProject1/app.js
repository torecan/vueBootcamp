const vm = Vue.createApp({
    data() {
        return {
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            perspective: 20,
        }
    },
    methods: { 
        reset() {
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
            this.perspective = 20;
        },
        async copy() {
            let text = `transform:${this.box.transform};`
            console.log(text)

            await navigator.clipboard.writeText(text);
            alert("CSS Copied to Clipboard!")

        }  

    }, 
    computed: {

        box() {
            console.log("sksks")
            return {
                transform: `
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)
                `
            }    
        }    

    }
}).mount('#app')