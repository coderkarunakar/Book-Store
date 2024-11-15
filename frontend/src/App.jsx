//note:the short to create below 4 line are type rafc and click enter
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { CreateBook } from './pages/CreateBook'
import { DeleteBook } from './pages/DeleteBook'
import { ShowBook } from './pages/ShowBook'
import { EditBook } from './pages/EditBook'
export const App = () => {
  return (
    <Routes>
      <Route path ='' element={<Home/>} />
      <Route path ='' element={<CreateBook/>} />
      <Route path ='' element={<ShowBook/>} />
      <Route path ='' element={<EditBook/>} />
      <Route path ='' element={<DeleteBook/>} />
    </Routes>
    )
}

export default App
