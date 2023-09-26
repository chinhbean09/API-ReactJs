import React, { createContext, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Chinh } from './pages/Chinh'; // Import the component for /chinh route
import { Home } from './pages/Home'; // Import the component for /home route
import { SignInModal } from './components/SignInModal';
import { Counter } from './components/Counter';


//1 la so , 2 la chu, 3 la null
export const Session = createContext(null)

function App() {
  //funtion app la bố của component còn lại
  //trong ham app, ta se khai bao 1 state gia tri la null
  const[user,setUser] = useState(null)
  return (
    //cung cap cho nhung thang nam trong component session provider co the sai user va setUser
    <Session.Provider value= {{user,setUser}}>
    <div className="App">
      <NavBar></NavBar>
        <Routes>
          <Route path="/chinh" element={<Chinh />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Counter></Counter>
      {JSON.stringify(user)}
    </div>
    </Session.Provider>
  );
}

export default App;
