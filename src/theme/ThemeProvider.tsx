"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}









// import React from 'react'
// import { ThemeProviderProps } from 'next-themes/dist/types'

// export const ThemeProvider = ({children, ...props}: ThemeProviderProps) => {
//   return (
//     <div>ThemeProvider</div>
//   )
// }