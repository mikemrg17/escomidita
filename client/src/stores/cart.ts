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
        add_to_cart(item: any){
            //Agregar al carrito
        },
        delete_from_cart(item: any){
            //Eliminar producto del carrito
        }
    }
})