import { useState, useEffect, createContext} from 'react'
import axios from 'axios'


const BebidasContext = createContext()

const BebidasProvider = ({children}) => {
   

     
    return(

        <CategoriasContext.Provider 
            value={{
                categorias
            }}
        >
            {children}
        </CategoriasContext.Provider>
    )
}
export {
    CategoriasProvider
}
export default CategoriasContext