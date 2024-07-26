import { BrowserRouter, Router, useRoutes } from 'react-router-dom'
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
      <Router basename='/aracari-figma'>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </Router>
    </>
  )
}

export default App
