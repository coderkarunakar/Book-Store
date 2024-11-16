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

    // creating all our routes and its paths
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/books/create' element={<CreateBook/>} />
      <Route path ='/books/details/:id' element={<ShowBook/>} />
      <Route path ='/books/edit/:id' element={<EditBook/>} />
      <Route path ='/books/delete/:id' element={<DeleteBook/>} />
    </Routes>
    )
}

export default App
