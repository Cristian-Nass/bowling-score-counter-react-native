import { create } from "zustand";

export const useStore = create((set) => ({
  players: [],
  setPlayer: (name) => {
    set((state) => {
      return {
        players: [...state.players, name],
      };
    });
  },
}));
