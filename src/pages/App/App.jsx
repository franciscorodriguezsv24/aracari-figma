import { BrowserRouter, useRoutes } from 'react-router-dom'
import About from '../About'
import Home from '../Home'
import NotFound from '../NotFound'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:'/', element: <Home/>},
    {path:'/about', element: <About/>},
    {path:'/*', element: <NotFound/>}
  ])

  return routes
}

function App() {
  

  return (
    <>
        <BrowserRouter basename="/aracari-figma">
          <AppRoutes/>
        </BrowserRouter>
    </>
  )
}

export default App
