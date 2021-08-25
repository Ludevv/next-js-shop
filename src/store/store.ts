import create from 'zustand'


export type Cart = {
  id: string,
  name: string,
  image: string,
  price: string,
}

type CartState = {
  cart: Cart[];
  addToCart: (item: Cart) => void;
  removeFromCart: (id: string) => void;
}


export const useStore = create<CartState>(set => ({
	cart: [],

	addToCart: (item: Cart) => {
    	set((state) => ({
		cart: [
			...state.cart, item
		],
		}));
	},

    removeFromCart: (id) => {
    	set((state) => ({
      		cart: state.cart.filter((cart) => cart.id !== id),
    	}));
 	 },
}));