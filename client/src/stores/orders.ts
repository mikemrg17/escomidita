import { defineStore } from "pinia"
import { supabase } from "../supabase"
import { use_cart_store } from "./cart"

const cart_store = use_cart_store()

export const use_orders_store = defineStore("orders", {
    state: () => ({
        orders: [],
        loading: false,
        current_order: null
    } as {
        orders: any
        loading: boolean
        current_order: any
    }),
    getters: {
        get_current_orders: async (state) => state.orders ,
        get_orders: async (state) => state.orders,
        get_current_product: (state) => state.current_order
    },
    actions: {
        set_orders(orders: any){
            this.orders = orders
        },
        set_current_product(order: any) {
            this.current_order = order
        },
        async add_to_orders(order: any){
            this.orders.push(order)
        },
        set_loading(loading: any) {
            this.loading = loading
        }
    }
})