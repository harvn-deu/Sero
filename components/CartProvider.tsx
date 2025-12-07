"use client";

import { create } from "zustand";
import { ReactNode, createContext, useContext } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
};

const CartContext = createContext<CartStore | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

export function CartProvider({ children }: { children: ReactNode }) {
  const store = create<CartStore>((set, get) => ({
    items: [],

    addItem: (newItem) =>
      set((state) => {
        const existing = state.items.find((i) => i.id === newItem.id);
        if (existing) {
          return {
            items: state.items.map((i) =>
              i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          };
        }
        return { items: [...state.items, { ...newItem, quantity: 1 }] };
      }),

    removeItem: (id) =>
      set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

    updateQuantity: (id, quantity) =>
      set((state) => ({
        items:
          quantity === 0
            ? state.items.filter((i) => i.id !== id)
            : state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
      })),

    clearCart: () => set({ items: [] }),

    getTotalPrice: () =>
      get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

    getTotalItems: () =>
      get().items.reduce((sum, item) => sum + item.quantity, 0),
  }));

  return <CartContext.Provider value={store()}>{children}</CartContext.Provider>;
                                                  }
