import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Payment from './components/Payment/Payment';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className='font-[roboto]'>
      <Header />
      <Routes>
        <Route path='/' element={<Payment />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>

      {/* <Payment />
      <Login /> */}
    </div>
  );
}

export default App;
