
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDo from './component/ToDo'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
