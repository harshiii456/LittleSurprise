import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { Heart, X, Camera, Calendar, Eye } from 'lucide-react'

const Gallery = () => {
  const [memories, setMemories] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedMemory, setSelectedMemory] = useState(null)

  useEffect(() => {
    fetchMemories()
  }, [])

  const fetchMemories = async () => {
    try {
      const response = await axios.get('/api/memories')
      setMemories(response.data.data)
    } catch (error) {
      console.error('Error fetching memories:', error)
      // Fallback data with placeholder images
      setMemories([
        {
          _id: '1',
          title: 'First Meeting',
          description: 'The day that started it all',
          whatIFelt: 'Nervous, excited, and somehow knowing this was different',
          futureVersion: 'Still gives me butterflies thinking about it',
          image: 'https://picsum.photos/seed/firstmeeting/400/300',
          category: 'milestone'
        },
        {
          _id: '2',
          title: 'Coffee Date',
          description: 'Hours of conversation and laughter',
          whatIFelt: 'Like I could talk to you forever',
          futureVersion: 'I still want to talk to you forever',
          image: 'https://picsum.photos/seed/coffee/300/400',
          category: 'memory'
        },
        {
          _id: '3',
          title: 'Rainy Day Walk',
          description: 'Getting soaked but not caring',
          whatIFelt: 'Free and completely myself with you',
          futureVersion: 'Let\'s get caught in more storms together',
          image: 'https://picsum.photos/seed/rainy/400/500',
          category: 'memory'
        },
        {
          _id: '4',
          title: 'First Anniversary',
          description: '365 days of choosing us',
          whatIFelt: 'Grateful for every moment',
          futureVersion: 'Can\'t wait for all the anniversaries to come',
          image: 'https://picsum.photos/seed/anniversary/500/300',
          category: 'milestone'
        },
        {
          _id: '5',
          title: 'Late Night Calls',
          description: 'Falling asleep to your voice',
          whatIFelt: 'Safe, loved, and completely yours',
          futureVersion: 'Still my favorite way to end the day',
          image: 'https://picsum.photos/seed/calls/300/300',
          category: 'memory'
        },
        {
          _id: '6',
          title: 'The Day You Left',
          description: 'Hardest goodbye, strongest promise',
          whatIFelt: 'Heartbroken but hopeful',
          futureVersion: 'This chapter ends with us together again',
          image: 'https://picsum.photos/seed/goodbye/400/400',
          category: 'milestone'
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const openModal = (memory) => {
    setSelectedMemory(memory)
  }

  const closeModal = () => {
    setSelectedMemory(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-romantic-pink border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-deep-navy font-script text-xl">Loading our memories...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy font-serif mb-4">
            Memory Gallery
          </h1>
          <p className="text-xl text-soft-rose font-script">
            Captured moments, forever in my heart
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {memories.map((memory, index) => (
            <motion.div
              key={memory._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid mb-4"
            >
              <div
                className="romantic-card rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openModal(memory)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <Eye className="w-5 h-5 mb-2" />
                      <p className="text-sm">Click to view memory</p>
                    </div>
                  </div>

                  {/* Category badge */}
                  {memory.category === 'milestone' && (
                    <div className="absolute top-4 right-4 bg-romantic-pink text-white text-xs px-2 py-1 rounded-full">
                      Milestone
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-deep-navy font-serif mb-2">
                    {memory.title}
                  </h3>
                  <p className="text-deep-navy/70 text-sm mb-3">
                    {memory.description}
                  </p>
                  <div className="flex items-center text-romantic-pink text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Forever remembered</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedMemory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="romantic-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-soft-rose/30 p-4 flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-deep-navy font-serif">
                      {selectedMemory.title}
                    </h2>
                    <p className="text-deep-navy/70 mt-1">
                      {selectedMemory.description}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-deep-navy/60 hover:text-deep-navy transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {/* Image */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <motion.img
                      src={selectedMemory.image}
                      alt={selectedMemory.title}
                      className="w-full h-auto object-cover"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Memory Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="romantic-card rounded-xl p-4">
                      <h3 className="font-bold text-deep-navy font-serif mb-3 flex items-center">
                        <Heart className="w-5 h-5 text-romantic-pink mr-2" />
                        What I Felt
                      </h3>
                      <p className="text-deep-navy leading-relaxed italic">
                        "{selectedMemory.whatIFelt}"
                      </p>
                    </div>

                    <div className="romantic-card rounded-xl p-4">
                      <h3 className="font-bold text-deep-navy font-serif mb-3 flex items-center">
                        <Camera className="w-5 h-5 text-romantic-pink mr-2" />
                        Future Version
                      </h3>
                      <p className="text-deep-navy leading-relaxed italic">
                        "{selectedMemory.futureVersion}"
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={closeModal}
                      className="romantic-button text-white font-semibold py-2 px-6 rounded-full"
                    >
                      Close Memory
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="romantic-card rounded-2xl p-6 max-w-2xl mx-auto">
            <Camera className="w-8 h-8 text-romantic-pink mx-auto mb-4" />
            <p className="text-lg text-deep-navy font-serif">
              Every picture tells a story, but our favorite chapters are yet to be written.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Gallery
