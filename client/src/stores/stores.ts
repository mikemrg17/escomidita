import { defineStore } from "pinia"
import { supabase } from "../supabase"

export const use_stores_store = defineStore("stores", {
    state: () => ({
        stores_data: [],
        current_store: null,
        current_store_data: null,
        updated_stores_data: false,
        loading: false,
    }) as {
        stores_data: any
        current_store: any
        current_store_data: any
        updated_stores_data: boolean
        loading: boolean
    },
    getters: {
        get_current_stores: (state) => state.stores_data,
        get_current_store: (state) => (selected_store: any) => state.stores_data.find(
            (store: any) => store.id === selected_store
        )
    },
    actions: {
        async get_stores_data() {
            this.loading = true
            if(this.stores_data.length !== 0){
                this.loading = false
                return
            }
            
            const { data: stores, error } = await supabase.from('stores').select('*')
            this.stores_data = stores
            this.loading = false
        },
        async set_current_store(store: any) {
            this.updated_stores_data = false
            this.current_store = store
            this.current_store_data = this.get_current_store(store)
            
            await new Promise((resolve) => setTimeout(resolve, 20))
            this.updated_stores_data = true
        },
        set_loading(loading: boolean) {
            this.loading = loading
        }
    }
})