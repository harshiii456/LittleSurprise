import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX, Heart, Music } from 'lucide-react'

const Home = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [audio, setAudio] = useState(null)

  useEffect(() => {
    // Create audio element (you'll need to add an actual audio file)
    const audioElement = new Audio('/romantic-music.mp3')
    audioElement.loop = true
    audioElement.volume = 0.3
    setAudio(audioElement)

    return () => {
      if (audioElement) {
        audioElement.pause()
      }
    }
  }, [])

  const toggleMusic = () => {
    if (!audio) return

    if (isMuted) {
      audio.play().catch(error => {
        console.log('Audio autoplay prevented:', error)
      })
    } else {
      audio.pause()
    }
    setIsMuted(!isMuted)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 romantic-gradient opacity-30" />
      
      {/* Floating hearts background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-romantic-pink/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      {/* Music toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className="fixed top-20 right-4 z-40 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg romantic-button"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-deep-navy" />
        ) : (
          <Volume2 className="w-5 h-5 text-deep-navy" />
        )}
      </motion.button>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Animated heart */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <Heart className="w-24 h-24 text-romantic-pink mx-auto" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-deep-navy mb-6 font-serif leading-tight"
          >
            2 Years Down...
            <br />
            <span className="text-romantic-pink">Still Stuck With Me 😌</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl font-script text-soft-rose mb-8"
          >
            For Yojit Patni
          </motion.p>

          {/* Welcome message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="romantic-card rounded-2xl p-6 mb-8 max-w-2xl mx-auto"
          >
            <p className="text-lg text-deep-navy leading-relaxed">
              Hi Bangalore boy. If you're here, it means we survived 2 years... 
              <span className="font-script text-romantic-pink text-xl"> Punjab still owns your heart.</span>
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8"
          >
            <div className="romantic-card rounded-xl p-4">
              <div className="text-3xl font-bold text-romantic-pink">730</div>
              <div className="text-sm text-deep-navy">Days Together</div>
            </div>
            <div className="romantic-card rounded-xl p-4">
              <div className="text-3xl font-bold text-romantic-pink">30</div>
              <div className="text-sm text-deep-navy">Days Apart</div>
            </div>
            <div className="romantic-card rounded-xl p-4">
              <div className="text-3xl font-bold text-romantic-pink">∞</div>
              <div className="text-sm text-deep-navy">To Go</div>
            </div>
          </motion.div>

          {/* Music note indicator */}
          {isMuted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center text-deep-navy/60 text-sm"
            >
              <Music className="w-4 h-4 mr-2" />
              Click the sound icon to play our song
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-4 left-0 right-0 text-center"
      >
        <p className="text-deep-navy/60 text-sm font-serif">
          Yojit Patni & Harshita — Always.
        </p>
      </motion.div>
    </div>
  )
}

export default Home
