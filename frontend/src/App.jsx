import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Login from './pages/Login'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Distance from './pages/Distance'
import Letters from './pages/Letters'
import Gallery from './pages/Gallery'
import Quiz from './pages/Quiz'
import OpenWhen from './pages/OpenWhen'
import Final from './pages/Final'
import Navbar from './components/Navbar'
import HeartParticles from './components/HeartParticles'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="animate-pulse-slow text-2xl font-script text-romantic-pink">
          Loading our love story...
        </div>
      </div>
    )
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />
}

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="min-h-screen bg-cream">
      <HeartParticles />
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} 
        />
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/timeline" element={
          <ProtectedRoute>
            <Timeline />
          </ProtectedRoute>
        } />
        <Route path="/distance" element={
          <ProtectedRoute>
            <Distance />
          </ProtectedRoute>
        } />
        <Route path="/letters" element={
          <ProtectedRoute>
            <Letters />
          </ProtectedRoute>
        } />
        <Route path="/gallery" element={
          <ProtectedRoute>
            <Gallery />
          </ProtectedRoute>
        } />
        <Route path="/quiz" element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        } />
        <Route path="/open-when" element={
          <ProtectedRoute>
            <OpenWhen />
          </ProtectedRoute>
        } />
        <Route path="/final" element={
          <ProtectedRoute>
            <Final />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App
