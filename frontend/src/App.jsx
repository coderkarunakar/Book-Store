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
    <div>
 {/* Adding a heading for the Book Store */}
 <h1
        style={{
          textAlign: 'center',
          margin: '20px 0',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Book Store
      </h1>
   
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/books/create' element={<CreateBook/>} />
      <Route path ='/books/details/:id' element={<ShowBook/>} />
      <Route path ='/books/edit/:id' element={<EditBook/>} />
      <Route path ='/books/delete/:id' element={<DeleteBook/>} />
    </Routes>
    </div>
    )
}

export default App
