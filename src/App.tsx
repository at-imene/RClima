import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './context/theme-provider'
import Layout from './layouts/layout'

function App() {

  return (
    <BrowserRouter>
    <ThemeProvider defaultTheme='dark'>
    <Layout >
        Main
      </Layout>
    </ThemeProvider>
     
    </BrowserRouter>
  )
}

export default App
