<template>
    <h1>Welcome {{ username }}, <a @click="logout">Logout</a></h1>
</template>
<script>
export default {
    setup: () => ({
        token: localStorage.getItem("user-token"),
    }),
    computed: {
        username: {
            get() {
                return this.$store.state.username;
            },
        },
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                await this.$store.dispatch("fetchData");
            } catch (error) {
                this.$router.push("/login");
            }
        },
        async logout() {
            try {
                await this.$store.dispatch("logout");
                this.$router.push("/login");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
