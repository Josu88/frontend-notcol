import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [idUser, setIdUser] = useState(localStorage.getItem("iduser"));
  const [imgName, setImgName] = useState(localStorage.getItem("imgName"));

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        idUser,
        imgName,
        setIdUser,
        setUser,
        setToken,
        setImgName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
