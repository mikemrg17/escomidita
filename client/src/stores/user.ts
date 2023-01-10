import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        currentUser: null,
        currentAccessToken: null,
        loading: false,
    } as {
        currentUser: any
        currentAccessToken: string | null
        loading: boolean
    }),
    getters: {
        getCurrentUser: (state) => state.currentUser,
    },
    actions: {
        setCurrentUser(user: any){
            this.currentUser = user
        },
        setCurrentAccessToken(token: string){
            this.currentAccessToken = token
        },
        setLoading(loading: boolean){
            this.loading = loading
        }
    }
})