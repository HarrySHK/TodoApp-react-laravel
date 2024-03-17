import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import Edit from './pages/edit';
import View from './pages/view';
import { FaHome } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";


function App() {
  return (
    <div>
<div className="navbar w-5/6 mx-auto rounded-3xl">
	<div className="navbar-start">
		<a className="navbar-item text-black text-xl font-extrabold font-sans">Todo<span className='text-[#5a0c6e]'>APP</span></a>
	</div>
	<div className="navbar-center bg-[#5a0c6e] rounded-full gap-10">
		<Link to={"/"} className="navbar-item text-white hover:bg-white w-28 rounded-none text-center hover:text-black"><FaHome /> Home</Link>
		<Link to={"/create"} className="navbar-item text-white hover:bg-white w-28 rounded-none text-center hover:text-black"><IoCreate />
 Create</Link>
	</div>
	<div className="navbar-end">
  <input class="input-ghost-secondary input input-solid input-rounded placeholder:text-center" placeholder="Search..." />
	</div>
</div>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/edit/:id' element={<Edit/>} />
          <Route path='/view/:id' element={<View/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
