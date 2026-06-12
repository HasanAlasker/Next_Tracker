import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../generated/prisma/client";
import axios from "axios";
import { AuthPayload } from "../types/auth";

interface UserState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: boolean;

  saveUser: (user: User, token: string) => void;
  logout: () => void;
  login: (data: AuthPayload) => Promise<any>;
  register: (data: AuthPayload) => Promise<any>;
}

export const useAuthStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      loading: false,
      error: false,

      saveUser: (user: User, token: string) => {
        set({ user, token });
        document.cookie = `token=${token};  path=/; max-age=${60 * 60 * 24 * 7}`;
      },

      logout: async () => {
        await axios.post(`api/auth/logout`);
        set({ user: null, token: null });
      },

      login: async (data: AuthPayload) => {
        try {
          set({ loading: true, error: false });
          const res = await axios.post(`/api/auth/login`, data);
          console.log("res from store:", res.data);
          if (res.status === 200) {
            const user = res.data.user;
            const token = res.headers["x-auth-token"];
            get().saveUser(user, token);
          }
          return res;
        } catch (error) {
          set({ error: true });
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      register: async (data: AuthPayload) => {
        try {
          set({ loading: true, error: false });
          const res = await axios.post(`/api/auth/register`, data);
          if (res.status === 201) {
            const user = res.data.user;
            const token = res.headers["x-auth-token"];
            get().saveUser(user, token);
          }
          return res;
        } catch (error) {
          set({ error: true });
          throw error;
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "auth-storage", // localStorage key
      partialize: (state) => ({ user: state.user, token: state.token }), // only persist these
    },
  ),
);
