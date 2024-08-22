import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import FactsPage from './pages/FactsPage';
import FactOfTheDay from './pages/FactOfTheDay';
import GalleryPage from './pages/GalleryPage';
import ProfilePage from './pages/ProfilePage';
import './styles/App.css';





function App() {
    return (
        <Router>
            <NavBar />
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/facts" element={<FactsPage />} />
                    <Route path="/facts-of-the-day" element={<FactOfTheDay />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </div>
        </Router>
    );
}



export default App;