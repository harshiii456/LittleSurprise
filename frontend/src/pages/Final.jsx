import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Unlock, Heart, Play, Pause, Volume2, VolumeX } from 'lucide-react'

const Final = () => {
  const [isLocked, setIsLocked] = useState(true)
  const [promise, setPromise] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showVideo, setShowVideo] = useState(false)

  const handleUnlock = () => {
    if (promise.toLowerCase().includes('promise') || promise.toLowerCase().includes('i promise')) {
      setIsLocked(false)
      setTimeout(() => setShowVideo(true), 1000)
    } else {
      alert('You need to make a real promise! 💕')
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {isLocked ? (
          <motion.div
            key="locked"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center max-w-md w-full"
          >
            <div className="romantic-card rounded-3xl p-8 shadow-2xl">
              {/* Lock Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 bg-romantic-pink rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Lock className="w-10 h-10 text-white" />
              </motion.div>

              {/* Warning Text */}
              <h1 className="text-2xl font-bold text-deep-navy font-serif mb-4">
                Only open if you promise not to cry
              </h1>

              <p className="text-deep-navy/70 mb-6 font-serif">
                This is our final chapter. Are you ready?
              </p>

              {/* Promise Input */}
              <div className="mb-6">
                <input
                  type="text"
                  value={promise}
                  onChange={(e) => setPromise(e.target.value)}
                  placeholder="Type your promise here..."
                  className="w-full px-4 py-3 border border-soft-rose rounded-xl focus:ring-2 focus:ring-romantic-pink focus:border-transparent bg-white/80 backdrop-blur text-center"
                  onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
                />
              </div>

              {/* Unlock Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleUnlock}
                disabled={!promise.trim()}
                className="romantic-button text-white font-bold py-3 px-8 rounded-full w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Unlock className="w-5 h-5 mr-2" />
                I Promise
              </motion.button>

              {/* Footer Note */}
              <p className="text-xs text-deep-navy/40 mt-4 font-serif">
                This moment is just for us
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-4xl"
          >
            {/* Fade to black effect */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Main Content */}
            <div className="text-center">
              {/* Video Section */}
              {showVideo && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5 }}
                  className="romantic-card rounded-3xl p-8 mb-8 shadow-2xl"
                >
                  <h2 className="text-3xl font-bold text-deep-navy font-serif mb-6">
                    Our Journey
                  </h2>
                  
                  {/* Video Placeholder */}
                  <div className="relative bg-black rounded-2xl overflow-hidden mb-6" style={{ paddingBottom: '56.25%' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <p className="text-lg font-serif">
                          Video placeholder - Add your special video here
                        </p>
                        <p className="text-sm opacity-60 mt-2">
                          Upload a video montage of your favorite memories together
                        </p>
                      </div>
                    </div>
                    
                    {/* Video Controls Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Final Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                className="romantic-card rounded-3xl p-8 shadow-2xl"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 bg-romantic-pink rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>

                <h1 className="text-4xl md:text-5xl font-bold text-deep-navy font-serif mb-6">
                  Happy Anniversary
                </h1>

                <div className="space-y-4 text-lg text-deep-navy font-serif leading-relaxed max-w-2xl mx-auto">
                  <p>2 years. 1 month distance. Zero doubts.</p>
                  <p>I'm still choosing you, Mingu.</p>
                  <p className="text-2xl text-romantic-pink font-script">
                    Happy Anniversary.
                  </p>
                  <p className="text-xl">— Tingu ❤️</p>
                </div>

                {/* Animated Hearts */}
                <div className="mt-8 flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    >
                      <Heart className="w-6 h-6 text-romantic-pink" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Final Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
                className="mt-8"
              >
                <p className="text-deep-navy/60 font-serif">
                  Mingu & Tingu — Always.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Final
