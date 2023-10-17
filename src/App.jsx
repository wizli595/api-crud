import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Display from './component/display'
import Create from './component/create'
import Delete from './component/delete'
import NotFound from './component/notFound'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/api-crud/' element={<Display />} />
          <Route exact path='/api-crud/create' element={<Create />} />
          <Route exact path='/api-crud/delete/:id' element={<Delete />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
