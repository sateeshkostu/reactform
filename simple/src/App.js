import React from "react";
import { useForm } from "react-hook-form";
import './components/signup.css';
import './components/login.css';
import LoginForm from "./components/LoginForm"
import RegistrationForm from "./components/RegistrationForm";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ImageGallery from "./components/ImageGallery";
import Home from "./components/Home";

function App() {

  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />}></Route>
      <Route path="/RegistrationForm" element={<RegistrationForm />}></Route>
      <Route path="/LoginForm" element={<LoginForm />}></Route>
      <Route path="/ImageGallery" element={<ImageGallery />}></Route>

    </Routes>
    </BrowserRouter>
  
    // <>
      
    //   <RegistrationForm />
    //   <LoginForm />
    //   <ImageGallery />
    
    // </>

  );
}

export default App;


