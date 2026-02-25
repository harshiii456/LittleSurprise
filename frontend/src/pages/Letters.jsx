import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Heart, Mail, Eye, EyeOff } from 'lucide-react'

const TypewriterText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

const Letters = () => {
  const [letters, setLetters] = useState({
    reasons: [],
    unsaid: [],
    promises: []
  })
  const [loading, setLoading] = useState(true)
  const [showHiddenHeart, setShowHiddenHeart] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('reasons')

  useEffect(() => {
    fetchLetters()
  }, [])

  const fetchLetters = async () => {
    try {
      const response = await axios.get('/api/letters')
      const allLetters = response.data.data
      
      // Group by category
      const grouped = allLetters.reduce((acc, letter) => {
        if (!acc[letter.category]) {
          acc[letter.category] = []
        }
        acc[letter.category].push(letter)
        return acc
      }, {})

      setLetters({
        reasons: grouped.reasons || [],
        unsaid: grouped.unsaid || [],
        promises: grouped.promises || []
      })
    } catch (error) {
      console.error('Error fetching letters:', error)
      // Fallback data
      setLetters({
        reasons: [
          {
            _id: '1',
            title: 'The way you look at me',
            content: 'Like I\'m the only person in the world, even in a crowded room.',
            order: 1
          },
          {
            _id: '2',
            title: 'Your patience with my chaos',
            content: 'You handle my mood swings and overthinking with a calm that amazes me.',
            order: 2
          },
          {
            _id: '3',
            title: 'How you make me laugh',
            content: 'Even on my worst days, you find a way to make me smile.',
            order: 3
          },
          {
            _id: '4',
            title: 'Your dedication to us',
            content: 'Even with distance, you never let me doubt our love.',
            order: 4
          },
          {
            _id: '5',
            title: 'The little things',
            content: 'Good morning texts, random calls, remembering tiny details I mention.',
            order: 5
          }
        ],
        unsaid: [
          {
            _id: '6',
            title: 'I\'m proud of you',
            content: 'More than you\'ll ever know. Every achievement, every step forward.',
            order: 1
          },
          {
            _id: '7',
            title: 'I worry about you',
            content: 'When you\'re stressed, when you\'re tired, when you work too hard.',
            order: 2
          },
          {
            _id: '8',
            title: 'I imagine our future',
            content: 'Randomly, in the middle of the day. Little moments we\'ll share.',
            order: 3
          }
        ],
        promises: [
          {
            _id: '9',
            title: 'I\'ll always choose you',
            content: 'Every morning, every decision, every crossroads - it\'s always you.',
            order: 1
          },
          {
            _id: '10',
            title: 'I\'ll support your dreams',
            content: 'Even when they scare me, even when they take you far away.',
            order: 2
          },
          {
            _id: '11',
            title: 'I\'ll love you through the distance',
            content: 'Until we close every mile between us and more.',
            order: 3
          }
        ]
      })
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    { id: 'reasons', title: '10 Reasons I Still Choose You', icon: '💕' },
    { id: 'unsaid', title: 'Things I Don\'t Say Enough', icon: '💌' },
    { id: 'promises', title: 'Promises for Year 3', icon: '🌟' }
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-romantic-pink border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-deep-navy font-script text-xl">Writing our love letters...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy font-serif mb-4">
            Love Letters
          </h1>
          <p className="text-xl text-soft-rose font-script">
            Words my heart whispers when you're not listening
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-romantic-pink text-white'
                  : 'bg-white text-deep-navy hover:bg-romantic-pink/10'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Letters Content */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {letters[selectedCategory].map((letter, index) => (
            <motion.div
              key={letter._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="romantic-card rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-deep-navy font-serif mb-3">
                {letter.order}. {letter.title}
              </h3>
              <p className="text-deep-navy leading-relaxed font-serif">
                <TypewriterText text={letter.content} speed={30} />
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Hidden Heart Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowHiddenHeart(!showHiddenHeart)}
              className="text-6xl opacity-20 hover:opacity-40 transition-opacity duration-300"
            >
              ❤️
            </motion.button>
            
            {showHiddenHeart && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-20 left-1/2 transform -translate-x-1/2 romantic-card rounded-xl p-4 w-64 shadow-xl"
              >
                <p className="text-sm text-deep-navy font-script italic">
                  "I would choose you in every lifetime... even in Bangalore."
                </p>
              </motion.div>
            )}
          </div>
          
          {!showHiddenHeart && (
            <p className="text-sm text-deep-navy/40 mt-4">
              Click the heart above
            </p>
          )}
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="romantic-card rounded-2xl p-6 max-w-2xl mx-auto">
            <Mail className="w-8 h-8 text-romantic-pink mx-auto mb-4" />
            <p className="text-lg text-deep-navy font-serif">
              These words are just the beginning. 
              My heart writes a new letter to you every single day.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Letters
