const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: "Hi Loris and Luca, what's up?",
        };
    },
});

app.mount("#app");