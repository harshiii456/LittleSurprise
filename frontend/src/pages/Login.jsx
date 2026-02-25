import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { Heart, Lock } from 'lucide-react'

const Login = () => {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login, error, clearError } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    clearError()
    
    const result = await login(password)
    setIsLoading(false)
    
    if (result.success) {
      // Login successful, navigation handled by AuthContext
    }
  }

  return (
    <div className="min-h-screen romantic-gradient flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="romantic-card rounded-3xl p-8 w-full max-w-md shadow-2xl"
      >
        <div className="text-center mb-8">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block"
          >
            <Heart className="w-16 h-16 text-romantic-pink mx-auto mb-4" />
          </motion.div>
          
          <h1 className="text-3xl font-bold text-deep-navy mb-2 font-serif">
            Two Years With Mingu
          </h1>
          <p className="text-3xl md:text-2xl font-script text-deep-navy mb-8 font-bold">
            Our private anniversary celebration
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-deep-navy mb-2">
              Enter our special date
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-romantic-pink w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="DDMMYYYY"
                className="w-full pl-10 pr-4 py-3 border border-soft-rose rounded-xl focus:ring-2 focus:ring-romantic-pink focus:border-transparent bg-white/80 backdrop-blur"
                required
              />
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full romantic-button text-white font-semibold py-3 px-6 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                />
                Unlocking our memories...
              </span>
            ) : (
              'Enter Our Story'
            )}
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-deep-navy/60 font-serif">
            For Mingu, from Harshita ❤️
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
