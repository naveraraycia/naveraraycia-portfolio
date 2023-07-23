import { createContext, useReducer } from "react";
// import reducer here
import appReducer from "./AppReducer";

const AppContext = createContext()

export const AppProvider = ({children}) => {
  const initialState = {
    loading: false,
    darkMode: true
  }

  // use the reducer hook here
  const [state, dispatch] = useReducer(appReducer, initialState)

  return <AppContext.Provider value={{
    ...state,
    dispatch
  }}>
    {children}
  </AppContext.Provider>
}

export default AppContext