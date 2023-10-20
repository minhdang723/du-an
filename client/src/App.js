import { Routes, Route } from 'react-router-dom'
import "./App.css"
import ListUser from './pages/ListUser';
import DashBoard from './pages/DashBoard';
import AddUser from './pages/AddUser';
import ListBlog from './pages/ListBlog';
import AddBlog from './pages/AddBlog';
import AddService from './pages/addService';
import AddContentB from './pages/AddContentB';
import ListAppointment from './pages/ListAppointment';
import ListService from './pages/ListService';
import ListReview from './pages/ListReview';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DashBoard />}></Route>
        <Route path='/listblog' element={<ListBlog />}></Route>
        <Route path='/listuser' element={<ListUser />}></Route>
        <Route path='/adduser' element={<AddUser />}></Route>
        <Route path='/addblog' element={<AddBlog />}></Route>
        <Route path='/addservice' element={<AddService />}></Route>
        <Route path='/addcontentblog' element={<AddContentB />}></Route>
        <Route path='/listappointment' element={<ListAppointment />}></Route>
        <Route path='/ListService' element={<ListService />}></Route>
        <Route path='/ListReview' element={<ListReview />}></Route>
      </Routes>

    </>
  );
}

export default App;
