import React ,{useEffect, useState}from 'react'
//importing axios from axios
import axios from 'axios';
import {Spinner} from '../../components/Spinner';
import {Link} from 'react-router-dom';
//for icons
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle, BsThreads} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';



export const Home = () => {
    // Your component code
   
        const [books, setBooks] = useState([]);
        const [loading,setLoading] = useState(false);
        useEffect(()=>{
            setLoading(true);
            //for connecting our frontend to backend we are using axios
            axios .get('http://localhost:5555/books')
            .then((response)=>{
                console.log('karunakardatacheck',response.data);
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            })
        },[])
      return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'></h1>
                <Link to='/books/create'>
                <MdOutlineAddBox className='text-sky-800 text-4xl'/>
    
                </Link>
            </div>
            {loading? (<Spinner/>):(<table className='w-full border-seperate border-spacing-2'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md' >No</th>
                        <th className='border border-slate-600 rounded-md' >Title</th>
                        <th className='border border-slate-600 rounded-md' >Author</th>
                        <th className='border border-slate-600 rounded-md' >Description</th>
                        <th className='border border-slate-600 rounded-md' >Operation</th>
                    </tr>
                </thead>

                <tbody>

                    {books.map((book,index)=>(<tr key = {book._id} className='h-8'>
                        
                        <td className='border border-slate-700 rounded-md text-center'>
                            {/* //since index starts from 0 */}
                            {index +1}
                        </td >
                        
                    <td className='border border-slate-700 rounded-md text-center'>
                    {book.title}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                    {book.author}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                    {book.description}
                    </td>


                        <td className='border border-slate-700 rounded-md text-center'>
                           <div className='flex justify-center gap-x-4'>
                            <Link to ={`/books/details/${book._id}`}>
                                <BsInfoCircle className='text-2x1 text-green-800'/>
                            </Link>
                            <Link to ={`/books/edit/${book._id}`}>
                                <AiOutlineEdit className='text-2x1 text-yellow-600'/>
                            </Link>
                            <Link to ={`/books/delete/${book._id}`}>
                                < MdOutlineDelete className='text-2x1 text-red-600'/>
                            </Link>
    
                           </div>
                        </td>
                    </tr>)
                    
                    )}
                </tbody>
            </table>)}
            </div>
      )
    };
  
  