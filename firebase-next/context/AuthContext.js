import { createContext } from "react";
import GetFireBaseAdmin from "../lib/firebase";
export const AuthContext = createContext(null);

function Context({ children }) {
    const {auth, db} = GetFireBaseAdmin();
  return (
    <AuthContext.Provider value={{ auth, db }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Context;