import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

const AppContext = createContext()

export const AppProvider = ({children}) => {
  const initialState = {
    loading: false,
    darkMode: false
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  return <AppContext.Provider value={{
    ...state,
    dispatch
  }}>
    {children}
  </AppContext.Provider>
}

export default AppContext