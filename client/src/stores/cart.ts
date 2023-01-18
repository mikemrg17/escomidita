import { defineStore } from "pinia"

export const use_cart_store = defineStore("cart", {
    state: () => ({
        cart: [],
        total: 0,
        loading: false,
        current_product: null
    } as {
        cart: any
        total: any
        loading: boolean
        current_product: any
    }),
    getters: {
        get_cart: (state) => state.cart,
        get_current_product: (state) => state.current_product
    },
    actions: {
        set_current_product(item: any) {
            this.current_product = item
        },
        add_to_cart(item: any){
            this.cart.push(item)
            this.total += item.price
        },
        delete_from_cart(item: any){
            //dsdj
        },
        empty_cart() {
            this.cart = []
        }
    }
})