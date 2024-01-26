import { create } from "zustand";
import uuid from "react-native-uuid";

export const useStore = create((set) => ({
  players: [],
  setPlayer: (name) => {
    set((state) => {
      return {
        players: [...state.players, { key: uuid.v4(), name: name }],
      };
    });
  },
}));
