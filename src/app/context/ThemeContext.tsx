"use client"

import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

type Theme = {
    isThemeLight: boolean
}

interface ThemeContextInterface{
isThemeLight: Theme
setIsThemeLight: Dispatch<SetStateAction<Theme>>
}

const defaultThemeState = {
    isThemeLight: {isThemeLight: false},
    setIsThemeLight: (isThemeLight: Theme) => {}
} as ThemeContextInterface




export const ThemeContext = createContext<ThemeContextInterface>(defaultThemeState)


type ThemeProviderProps = {
    children: React.ReactNode
}

export default function ThemeProvider({children}: ThemeProviderProps){
    const [isThemeLight, setIsThemeLight] = useState<Theme>({isThemeLight: false})

    return(
        <ThemeContext.Provider value={{isThemeLight, setIsThemeLight}}>
{children}
        </ThemeContext.Provider>
    )
}


export const useGlobalThemeContext = () => useContext(ThemeContext)


// import { createContext, useState } from "react"


// type ThemeContextProviderProps{
//     children: React.ReactNode
// }

// const ThemeContext = createContext()

// export const ThemeContextProvider = ({children} : ThemeContextProviderProps) => {


// const [isThemeLight, setIsThemeLight] = useState(false)
// return (<ThemeContextProvider.Provider value={isThemeLight}>
//     {children}
// </ThemeContextProvider.Provider>)
// }