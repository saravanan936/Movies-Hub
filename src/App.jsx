import './App.css'
import Home from './components/Home'
import Navigationbar from './components/Navigationbar'

import Watchlist from './components/Watchlist'
import { Route, Routes } from 'react-router-dom'
import MovieContextWrapper from './context/MovieContext'
import { Provider } from "react-redux"
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <MovieContextWrapper>
        <Navigationbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          ></Route>
          <Route
            path='/watchlist'
            element={<Watchlist />}
          ></Route>
        </Routes>
      </MovieContextWrapper>
    </Provider>
  )
}

export default App