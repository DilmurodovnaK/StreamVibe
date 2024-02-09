import React, { createContext,  useContext,  useState } from 'react'

export const Theme = createContext();
export const Themeprovider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme ((prev) => (prev === "light" ? "dark" : "light"));
    };

  return (
  <Theme.Provider value= {{ theme, toggleTheme}}>
  {children}
  </Theme.Provider>
  )
}
export const useTheme = () => {
    return useContext(Theme)
};
