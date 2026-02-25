import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, X, Heart, Mail, Zap, Frown, Smile } from 'lucide-react'

const OpenWhen = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [openedCards, setOpenedCards] = useState(new Set())

  const cards = [
    {
      id: 'miss',
      title: 'Open When You Miss Me',
      icon: Heart,
      color: 'from-pink-400 to-rose-400',
      content: `Hey Bangalore boy,

I know some days the distance feels heavier than others. When you miss me, remember this:

I'm missing you too. Every single moment. But this distance is just a chapter in our story, not the whole book.

Think about our first date, how nervous we both were. Think about the way you laugh at my silly jokes. Think about all the inside jokes that only we understand.

Close your eyes and imagine I'm there. I'm probably thinking about you at the exact same moment. Our hearts are connected even when we're miles apart.

This distance is temporary, but what we have is forever.

Soon we'll close this distance for good. Until then, carry my love with you.

All my heart,
Harshita ❤️`
    },
    {
      id: 'fight',
      title: 'Open When We Fight',
      icon: Zap,
      color: 'from-orange-400 to-red-400',
      content: `My love,

If you're reading this, we're probably not okay right now. And that's okay.

Even the strongest love stories have chapters of conflict. What matters is that we always choose each other, even when it's hard.

Remember why we started this journey. Remember the promises we made. Remember that beneath any anger or frustration, there's a foundation of love that's stronger than any disagreement.

I want you to know three things:
1. I love you, even when I'm angry
2. This fight doesn't define us
3. I'm willing to listen and understand

When you're ready, let's talk. Not to win, but to understand. Not to be right, but to be together.

Our love is worth fighting for, but more importantly, it's worth making up for.

Always yours,
Harshita 💕`
    },
    {
      id: 'stressed',
      title: 'Open When You\'re Stressed',
      icon: Smile,
      color: 'from-blue-400 to-purple-400',
      content: `Dear Yojit,

I know you're probably overwhelmed right now. Work stress, life pressure, maybe everything feels like too much.

Take a deep breath. Seriously, do it right now.

Remember this: You are capable. You are strong. You have overcome every challenge that has come your way, and you'll overcome this one too.

I believe in you more than anyone. I've seen your brilliance, your dedication, your heart. You're going to figure this out, just like you always do.

And when you do, I'll be here cheering the loudest.

Until then, remember:
- You're allowed to rest
- You're allowed to not have all the answers
- You're allowed to ask for help
- You're allowed to be proud of how far you've come

I'm proud of you. Always.

With all my faith in you,
Harshita 🌟`
    },
    {
      id: 'doubt',
      title: 'Open When You Doubt Us',
      icon: Heart,
      color: 'from-purple-400 to-pink-400',
      content: `My love,

If you're reading this, doubt has crept in. Maybe the distance feels too big, maybe the wait feels too long, maybe you're wondering if this is worth it.

Let me remind you of something:

Remember the day we met? Remember how you felt? That wasn't coincidence. That was destiny.

Remember our first "I love you"? Remember how it felt like coming home? That was real.

Remember all the times we chose each other? Even when it was hard? That was commitment.

What we have is rare. It's the kind of love that survives distance, that grows stronger with time, that feels like home even when we're apart.

Don't let temporary doubt make you forget permanent truth: We are meant to be.

This chapter of distance will end. Our forever is just beginning.

Choose us. Again and again. I promise, I'm choosing you too.

Forever and always,
Harshita 💑`
    },
    {
      id: 'motivation',
      title: 'Open When You Need Motivation',
      icon: Gift,
      color: 'from-green-400 to-blue-400',
      content: `Hello my champion,

You're probably facing something big right now. A challenge, a decision, a moment that requires courage.

I want you to know: You've got this.

I've seen you face difficult things before. I've seen your strength, your resilience, your incredible ability to keep going when things get tough.

Remember why you started this journey. Remember the dreams that fuel you. Remember that every step forward, no matter how small, is progress.

You are capable of amazing things. You are smart enough, strong enough, and brave enough for whatever comes your way.

And the best part? You don't have to do it alone. I'm here, cheering for you, believing in you, loving you through it all.

Go show them what you're made of. Go show YOURSELF what you're made of.

I'll be here to celebrate every victory with you.

Your biggest fan,
Harshita 🏆`
    }
  ]

  const openCard = (cardId) => {
    setSelectedCard(cards.find(card => card.id === cardId))
    setOpenedCards(new Set([...openedCards, cardId]))
  }

  const closeModal = () => {
    setSelectedCard(null)
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
            Open When...
          </h1>
          <p className="text-xl text-soft-rose font-script">
            Letters for every moment we can't be together
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => {
            const Icon = card.icon
            const isOpened = openedCards.has(card.id)
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <motion.div
                  onClick={() => openCard(card.id)}
                  className={`romantic-card rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    isOpened ? 'opacity-75' : 'hover:shadow-xl'
                  }`}
                >
                  {/* Envelope flap effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-10 rounded-2xl`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-deep-navy font-serif text-center mb-2">
                    {card.title}
                  </h3>
                  
                  {/* Status */}
                  <div className="text-center">
                    {isOpened ? (
                      <span className="text-sm text-romantic-pink font-medium">
                        Opened ✓
                      </span>
                    ) : (
                      <span className="text-sm text-deep-navy/60 font-medium">
                        Click to open
                      </span>
                    )}
                  </div>
                  
                  {/* Decorative seal */}
                  {!isOpened && (
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-romantic-pink rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="romantic-card rounded-2xl p-6 max-w-2xl mx-auto">
            <Gift className="w-8 h-8 text-romantic-pink mx-auto mb-4" />
            <p className="text-lg text-deep-navy font-serif mb-2">
              These letters are my way of being there when I can't.
            </p>
            <p className="text-deep-navy/70">
              Open them whenever you need a reminder of our love.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="romantic-card rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-soft-rose/30 p-6 flex justify-between items-start">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${selectedCard.color} rounded-full flex items-center justify-center mr-4`}>
                    <selectedCard.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-deep-navy font-serif">
                    {selectedCard.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-deep-navy/60 hover:text-deep-navy transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Letter Content */}
              <div className="p-6">
                <div className="bg-cream/50 rounded-xl p-6">
                  <p className="text-deep-navy leading-relaxed whitespace-pre-line font-serif">
                    {selectedCard.content}
                  </p>
                </div>
                
                {/* Footer */}
                <div className="mt-6 text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeModal}
                    className="romantic-button text-white font-semibold py-2 px-6 rounded-full"
                  >
                    Close Letter
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default OpenWhen
