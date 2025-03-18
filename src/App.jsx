import React from 'react'
import CheryJones from './pages/CheryJones'
import ThemeProvider from './base/Theme'

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <CheryJones />
      </ThemeProvider>
    </div>
  )
}

export default App