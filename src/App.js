import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreateTask from './pages/CreateTask';
import TaskList from './pages/TaskList';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import Login from './auth/Login';
import Register from './auth/Register';
import { useEffect, useState } from 'react';
import { AuthProvider } from './auth/authContext';
import Protected from './auth/Proctected';
import { TaskProvider } from './components/content/TaskContent';
import EditProfile from './pages/EditProfile';

function App() {
  const [user, setUser] = useState(null);

  //useEffect()-
  useEffect(() => {
    const localUser = localStorage.getItem("todouser");
    const userObj = JSON.parse(localUser);
    setUser(userObj);
  }, [])

  return (
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="/login" />}></Route>
          <Route path='/' element={<Home />}>
            <Route path='/login' element={<Login set={setUser} />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/create-task' element={<CreateTask />}></Route>
          <Route path='/task-list' element={<Protected> <TaskList /> </Protected>}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
          <Route path='edit-profile' element={<EditProfile></EditProfile>}></Route>
        </Routes>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;