const {createApp} = Vue;
const app = createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        generateEmail() {
            this.emails = [];
            for(let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                    console.log(resp);
                    this.emails.push(resp.data.response);
                })
            }
            console.log(this.emails);
        }
    }
}).mount("#app");