import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { createContext } from "react";


function App() {
	
  return (
		<div className='App'>
			<Header />
			<div className='min-h-[calc(100vh-100px)] '>
				<Outlet />
			</div>
			<Footer />
		</div>
  );
}

export default App
