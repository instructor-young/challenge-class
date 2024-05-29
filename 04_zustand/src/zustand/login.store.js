import { create } from "zustand";

const useLoginStore = create((set, get) => ({
  isLoggedIn: false,
  functions: {
    logIn: () => set(() => ({ isLoggedIn: true })),
    logOut: () => set(() => ({ isLoggedIn: false })),
  },
}));

export default useLoginStore;
