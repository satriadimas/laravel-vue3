import { createStore } from "vuex";
import { mutation } from "./mutation_types";
import { subject } from "./subject";

export const store = createStore({
    state() {
        return {
            username: "",
            input: {
                email: "",
                password: "",
            },
        };
    },
    mutations: mutation,
    actions: subject,
});
