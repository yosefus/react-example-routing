import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './Counter'
import Shope from './pages/Shope'

function App() {

  return (
    <div >
      <nav>
        <NavLink to={'/counter'}>counter </NavLink>
        <NavLink to={'/'}>home </NavLink>
      </nav>

      <Routes>
        <Route index element={<Shope />} />

        <Route path='/counter'  >
          <Route index element={<Counter />} />
          <Route path='c' element={<Shope />} />
        </Route>

      </Routes>

      <footer>my site</footer>
    </div>
  )
}


export default App
