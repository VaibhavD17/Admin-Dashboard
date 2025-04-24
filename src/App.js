import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/Forgot-Password/ForgotPassword';

const MyContext = createContext();

function App() {

  const [isToggaleSidebar, setIsToggaleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(true)
  const [isHideSidebarandHeader, setIsHideSidebarandHeader] = useState(false)
  const [themeMode, setThemeMode] = useState(true)

  const values = {
    isToggaleSidebar,
    setIsToggaleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarandHeader,
    setIsHideSidebarandHeader,
    themeMode,
    setThemeMode,

  }

  useEffect(() => {
    if(themeMode === true) {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
      localStorage.setItem('themeMode', 'light')
    } else {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
      localStorage.setItem('themeMode', 'dark')
    }
  },[themeMode])

  return (
    <BrowserRouter >
      <MyContext.Provider value={values} >
        {
          isHideSidebarandHeader !== true &&
          <Header />
        }
        <div className='main d-flex'>
          {
            isHideSidebarandHeader !== true &&
            <div className={`sidebarWraper ${isToggaleSidebar === true ? "toggle" : ''}`}>
              <Sidebar />
            </div>
          }

          <div className={`content ${isHideSidebarandHeader === true && 'full'} ${isToggaleSidebar === true ? "toggle" : ''}`}>
            <Routes>
              <Route path={'/'} element={<Dashboard />}></Route>
              <Route path={'/dashboard'} element={<Dashboard />}></Route>
              <Route path={'/login'} element={<Login />}></Route>
              <Route path={'/register'} element={<Register />}></Route>
              <Route path={'/forgotpassword'} element={<ForgotPassword />}></Route>
            </Routes>
          </div>

        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext }
