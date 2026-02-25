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
    // Use local data instead of API fetch
    const localLetters = {
      reasons: [
        {
          _id: '1',
          title: 'The way you look at me',
          content: 'jb tu mujhe dekhta na tb esa lgta ki mein tere liye kitni important hu, teri eyes me mere liye vo affection and love dikhta which i love the most',
          order: 1
        },
        {
          _id: '2',
          title: 'Your patience with my chaos',
          content: 'Tu pta nhi kese mere mood swings ko handle karta mujhe nhi smjh ata, agar mein teri jgha hoti to ab tk pgl ho jati',
          order: 2
        },
        {
          _id: '3',
          title: 'How you make me laugh',
          content: 'mein jitna mrzi ro rhi hu, tujhe pta hai ki mujh ekese hasana hai....',
          order: 3
        },
        {
          _id: '4',
          title: 'Your dedication to us',
          content: 'mujhe jitni mrzi overthinking ho, insecurity ho, tu bhi mujhe support karta or mujhe humesha reassure krta..',
          order: 4
        },
        {
          _id: '5',
          title: 'The little things',
          content: 'Roz subha good morning ke messages + random calls + meri btai hui hr chotti cheez yaad rkhna',
          order: 5
        }
      ],
      unsaid: [
        {
          _id: '6',
          title: 'I\'m proud of you',
          content: 'I know mein bolti nhi, but baby i am really proud of you',
          order: 1
        },
        {
          _id: '7',
          title: 'I worry about you',
          content: 'ofc I worry about you, but i am not going to stop you from doing anything',
          order: 2
        },
        {
          _id: '8',
          title: 'I imagine our future',
          content: 'roz raat ko sone se pehle mein sochti hu ki kb hum firse mile ge or jb mile ge to kya kya batien kre ge',
          order: 3
        }
      ],
      promises: [
        {
          _id: '9',
          title: 'I\'ll always choose you',
          content: 'tujhe nhi choose kru gi to tu mujhe maar dega .... isiliye i will always choose you',
          order: 1
        },
        {
          _id: '10',
          title: 'I\'ll support your dreams',
          content: 'mein humesha tere sath hu chahe jo mrzi ho jaye',
          order: 2
        }
      ]
    }
    
    setLetters(localLetters)
    setLoading(false)
  }, [])

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
          <p className="text-3xl md:text-4xl font-script text-deep-navy mb-8 font-bold">
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
          
        </motion.div>
      </div>
    </div>
  )
}

export default Letters
