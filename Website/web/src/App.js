
import { Route, Routes} from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}/>
      </Routes>
    </>
  )
}

export default App
//Personal Note: BrowserRouter is in the index.js file wrapping around <APP> instead of in the App.js