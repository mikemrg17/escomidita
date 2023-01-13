import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        currentUser: null,
        currentAccessToken: null,
        loading: false,
        balance: null
    } as {
        currentUser: any
        currentAccessToken: string | null
        loading: boolean
        balance: any
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