import Nav from "./Nav"
import Landing from "./Landing"
import Shop from "./Shop"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
          <Route path='/' exact element={<Landing/>} />
          <Route path='/shop' element={<Shop/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
