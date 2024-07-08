"use client";

import { User } from "@supabase/supabase-js";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextValue = {
  isInitialized: boolean;
  isLoggedIn: boolean;
  me: User | null;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  signUp: (email: string, password: string) => void;
};

const initialValue: AuthContextValue = {
  isInitialized: false,
  isLoggedIn: false,
  me: null,
  logIn: () => {},
  logOut: () => {},
  signUp: () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  initialIsInitialized: boolean;
  initialMe: User | null;
}

export function AuthProvider({
  initialIsInitialized,
  initialMe,
  children,
}: PropsWithChildren<AuthProviderProps>) {
  const [isInitialized, setIsInitialized] =
    useState<AuthContextValue["isInitialized"]>(initialIsInitialized);
  const [me, setMe] = useState<AuthContextValue["me"]>(initialMe);
  const isLoggedIn = !!me;

  const logIn: AuthContextValue["logIn"] = async (email, password) => {
    if (me) return alert("이미 로그인 되어 있어요");
    if (!email || !password) return alert("이메일, 비밀번호 모두 채워 주세요.");

    const data = { email, password };
    const response = await fetch("http://localhost:3001/api/auth/log-in", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const user = await response.json();

    setMe(user);
  };

  const logOut = async () => {
    if (!me) return alert("로그인하고 눌러주세요");

    await fetch("http://localhost:3001/api/auth/log-out", { method: "DELETE" });

    setMe(null);
  };

  const signUp: AuthContextValue["signUp"] = async (email, password) => {
    if (me) return alert("이미 로그인 되어 있어요");
    if (!email || !password) return alert("이메일, 비밀번호 모두 채워 주세요.");

    const data = { email, password };
    const response = await fetch("http://localhost:3001/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const user = await response.json();

    setMe(user);
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/auth/me").then(async (response) => {
      if (response.status === 200) {
        const {
          data: { user },
        } = await response.json();
        setMe(user);
      }

      setIsInitialized(true);
    });
  }, []);

  const value: AuthContextValue = {
    isInitialized,
    isLoggedIn,
    me,
    logIn,
    logOut,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
