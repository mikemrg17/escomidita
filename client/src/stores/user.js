import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const use_user_store = defineStore("user", {
    state: () => {
        return {
            current_user: null,
            current_access_token: "",
        }
    },
    getters: {
        get_current_user: (state) => state.current_user,
    },
    actions: {
        set_current_user(user){
            this.current_user = user
        },
        set_current_access_token(token){
            this.current_access_token = token
        },
    }
})