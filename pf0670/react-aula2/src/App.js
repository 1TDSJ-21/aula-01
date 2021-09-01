import React from 'react'
import './App.css'
import Corpo from './components/corpo/Corpo'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

export default ()=> {

   return(
   <div>
    <h1 style={{fontSize:'4em', color:'#00ff00'}}>Conteúdo do App.js</h1>
    <Header/>
    <Corpo/>
    <Footer/>
</div>
)}