import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import ViewOne from './components/ViewOne';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<AddUser />} />
          <Route path='/delete/:id' element={<DeleteUser />} />
          <Route path='/view/:id' element={<ViewOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
