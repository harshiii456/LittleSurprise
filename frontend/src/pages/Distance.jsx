import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { MapPin, Heart, MessageCircle, X } from 'lucide-react'

const Distance = () => {
  const [missMessage, setMissMessage] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [daysTogether, setDaysTogether] = useState(730)
  const [daysApart, setDaysApart] = useState(30)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const startDate = new Date('2022-02-26')
      const currentDate = new Date()
      const totalDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24))
      setDaysTogether(totalDays)
    }, 1000 * 60 * 60) // Update every hour

    return () => clearInterval(interval)
  }, [])

  const fetchMissMessage = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/api/miss-you/random')
      setMissMessage(response.data.data.message)
    } catch (error) {
      console.error('Error fetching miss message:', error)
      // Fallback messages
      const fallbackMessages = [
        "Every mile between us makes my heart beat stronger for you.",
        "I miss you more than words can say, but I know this distance is temporary.",
        "Even when we're apart, you're always in my thoughts.",
        "Counting the days until I can hold you again.",
        "Distance means so little when someone means so much.",
        "You're worth every moment of this wait.",
        "I fall in love with you all over again every time we talk.",
        "This distance is just a test of how strong our love really is."
      ]
      setMissMessage(fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)])
    } finally {
      setLoading(false)
    }
  }

  const handleMissMeClick = () => {
    fetchMissMessage()
    setShowModal(true)
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy font-serif mb-4">
            Across the Miles
          </h1>
          <p className="text-3xl md:text-4xl font-script text-deep-navy mb-8 font-bold">
            Punjab to Bangalore - Our Love Knows No Distance
          </p>
        </motion.div>

        {/* World Map Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="romantic-card rounded-3xl p-8 mb-12"
        >
          <div className="relative h-96 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl overflow-hidden">
            {/* Simple map representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Punjab location */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    <MapPin className="w-8 h-8 text-romantic-pink" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-sm font-bold text-deep-navy bg-white px-2 py-1 rounded-full shadow">
                        Punjab 💕
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Bangalore location */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2"
                >
                  <div className="relative">
                    <MapPin className="w-8 h-8 text-romantic-pink" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-sm font-bold text-deep-navy bg-white px-2 py-1 rounded-full shadow">
                        Bangalore 💕
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Animated connection line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.line
                    x1="25%"
                    y1="25%"
                    x2="75%"
                    y2="65%"
                    stroke="#FFB6C1"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

                {/* Floating hearts along the path */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-romantic-pink/40"
                    style={{
                      left: `${25 + i * 12.5}%`,
                      top: `${25 + i * 10}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    <Heart className="w-4 h-4" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Distance info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-deep-navy font-semibold">
                ~2,000 km apart, but zero distance between our hearts
              </p>
            </div>
          </div>
        </motion.div>

        {/* Live Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="romantic-card rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-romantic-pink mb-2">
              {daysTogether}
            </div>
            <div className="text-deep-navy font-semibold mb-1">
              Days Loving You
            </div>
            <div className="text-sm text-deep-navy/60">
              Since 26 February 2022
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="romantic-card rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-romantic-pink mb-2">
              {daysApart}
            </div>
            <div className="text-deep-navy font-semibold mb-1">
              Days Missing You
            </div>
            <div className="text-sm text-deep-navy/60">
              Since you left for Bangalore
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="romantic-card rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-romantic-pink mb-2 animate-pulse-slow">
              ♾️
            </div>
            <div className="text-deep-navy font-semibold mb-1">
              Forever To Go
            </div>
            <div className="text-sm text-deep-navy/60">
              And counting...
            </div>
          </motion.div>
        </div>

        {/* Miss Me Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMissMeClick}
            disabled={loading}
            className="romantic-button text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                />
                Thinking of you...
              </span>
            ) : (
              <span className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Miss Me Button
              </span>
            )}
          </motion.button>
        </motion.div>

        {/* Modal */}
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="romantic-card rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <Heart className="w-8 h-8 text-romantic-pink" />
                <button
                  onClick={() => setShowModal(false)}
                  className="text-deep-navy/60 hover:text-deep-navy"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-lg text-deep-navy font-serif leading-relaxed mb-6">
                {missMessage}
              </p>
              
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                  className="romantic-button text-white font-semibold py-2 px-6 rounded-full"
                >
                  I Miss You Too ❤️
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Distance
