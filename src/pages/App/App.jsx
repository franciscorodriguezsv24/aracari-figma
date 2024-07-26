import { BrowserRouter, useRoutes } from 'react-router-dom'
import About from '../About'
import Home from '../Home'
import NotFound from '../NotFound'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:'aracari-figma/home', element: <Home/>},
    {path:'aracari-figma/about', element: <About/>},
    {path:'/*', element: <NotFound/>}
  ])

  return routes
}

function App() {
  

  return (
    <>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
    </>
  )
}

export default App
