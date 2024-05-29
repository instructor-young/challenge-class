import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const initialValue = { isLoggedIn: false };

// 1. 만든다 : createContext
export const AuthContext = createContext(initialValue);

// 2. 사용한다 : useContext
// 멋지게 사용하는 방법이 있는데, 쫌 있다가 알려드림.
export const useAuth = () => useContext(AuthContext);

// 3. 범위를 지정해서 값을 내려준다.
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = useCallback(() => setIsLoggedIn(true), []);
  const logOut = useCallback(() => setIsLoggedIn(false), []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      logIn,
      logOut,
    }),
    [isLoggedIn, logIn, logOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
