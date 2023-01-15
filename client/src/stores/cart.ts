import { defineStore } from "pinia"

export const use_cart_store = defineStore("cart", {
    state: () => ({
        cart: [],
    } as {
        cart: any
    }),
    getters: {
        get_cart: (state) => state.cart,
    },
    actions: {
        async add_to_cart(item: any){
            this.cart.push(item)
        },
        delete_from_cart(item: any){
            //dsdj
        }
    }
})