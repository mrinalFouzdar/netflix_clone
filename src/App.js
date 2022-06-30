
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home/Home';
import Navbar from './Components/Navbar/Navbar';
import { fetchAllMovies } from './Redux/Actions/all_Movies_Action/allMoviesAction';

function App() {
  // const {movieCollection} = useSelector((state)=>state.movieCategory)
  // useSelector
  const dispatch = useDispatch()
  
  // console.log(movieCollection)
  useEffect(()=>{
    dispatch(fetchAllMovies())
  },[])

  return (
    <div >
      <Navbar/>
      {/* <img width="100%" height="50%" src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=614&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2" alt="" className='left-img'/> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
