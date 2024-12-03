import { useState , useContext , createContext , useEffect } from "react";

// 1- first of all we create the context
const DataContext = createContext();

//2 - Create the provide
const DataProvider  = ({children})=>{
    const[section2data , setSection2data ] = useState([]);

   
    return(
        <DataContext.Provider value={[section2data , setSection2data ]}>
            {children}
        </DataContext.Provider>
    )

}

// custom hook
const useData = ()=> useContext(DataContext);
export {useData , DataProvider};