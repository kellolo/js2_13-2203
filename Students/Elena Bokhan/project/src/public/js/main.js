
let app = new Vue({
    el: "#app",
    data: {
        items: [],
        url: "http://localhost:8080/src/data/catalogData.json",
        show:false
    },
    methods: {
        getData() {
            return fetch(this.url).then(d => d.json())
        }
    },
    async mounted() {
        this.items = await this.getData();
        console.log(this.items)
    }
})
