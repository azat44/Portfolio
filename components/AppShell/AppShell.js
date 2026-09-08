'use client'

import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'

const AppShell = ({ children }) => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id="top" className={`${themeName} app`}>
      {children}
    </div>
  )
}

export default AppShell
