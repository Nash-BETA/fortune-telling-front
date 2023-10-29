import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <h1>Hello React Router v6</h1>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}
