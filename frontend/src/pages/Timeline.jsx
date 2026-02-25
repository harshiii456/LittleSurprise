import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Heart, Calendar, ChevronDown, ChevronUp } from 'lucide-react'

const Timeline = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedEvents, setExpandedEvents] = useState(new Set())

  useEffect(() => {
    fetchTimelineEvents()
  }, [])

  const fetchTimelineEvents = async () => {
    try {
      const response = await axios.get('/api/timeline')
      setEvents(response.data.data)
    } catch (error) {
      console.error('Error fetching timeline events:', error)
      // Fallback data
      setEvents([
        {
          _id: '1',
          title: 'The Day We Met',
          date: '2022-02-26',
          description: 'The moment that changed everything forever.',
          whatIWasThinking: 'Is this the person I\'ve been waiting for? My heart knew before my mind did.',
          icon: '💫',
          order: 1
        },
        {
          _id: '2',
          title: 'First Conversation',
          date: '2022-02-27',
          description: 'Talking for hours like we\'d known each other forever.',
          whatIWasThinking: 'How can someone\'s voice feel like home? I never wanted this conversation to end.',
          icon: '💬',
          order: 2
        },
        {
          _id: '3',
          title: 'First Date',
          date: '2022-03-05',
          description: 'Nervous laughter, stolen glances, and the beginning of us.',
          whatIWasThinking: 'I tried to play it cool, but my heart was doing backflips. This is real.',
          icon: '☕',
          order: 3
        },
        {
          _id: '4',
          title: 'The Moment I Knew',
          date: '2022-04-15',
          description: 'When I realized you were my forever.',
          whatIWasThinking: 'It wasn\'t one big moment, but a thousand small ones that added up to forever.',
          icon: '💕',
          order: 4
        },
        {
          _id: '5',
          title: 'Fights We Survived',
          date: '2022-08-20',
          description: 'Every argument made us stronger.',
          whatIWasThinking: 'Even when we fight, I know we\'ll choose each other. That\'s what matters.',
          icon: '💪',
          order: 5
        },
        {
          _id: '6',
          title: '1 Year Strong',
          date: '2023-02-26',
          description: '365 days of choosing you every single morning.',
          whatIWasThinking: 'One year down, and I\'d choose you again in every lifetime.',
          icon: '🎉',
          order: 6
        },
        {
          _id: '7',
          title: 'The Day You Left for Bangalore',
          date: '2024-01-15',
          description: 'The hardest goodbye, but not the end of our story.',
          whatIWasThinking: 'My heart broke a little, but I know distance can\'t break what\'s real.',
          icon: '✈️',
          order: 7
        },
        {
          _id: '8',
          title: '2 Years Today – Still Obsessed',
          date: '2024-02-26',
          description: '730 days and I\'m still falling for you.',
          whatIWasThinking: 'After all this time, my heart still races when I think of you. Always will.',
          icon: '👑',
          order: 8
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const toggleExpanded = (eventId) => {
    const newExpanded = new Set(expandedEvents)
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId)
    } else {
      newExpanded.add(eventId)
    }
    setExpandedEvents(newExpanded)
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
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
          <p className="text-deep-navy font-script text-xl">Loading our love story...</p>
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
            Our Love Story
          </h1>
          <p className="text-xl text-soft-rose font-script">
            Every moment that brought us here
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-romantic-pink/30" />

          {/* Timeline events */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-romantic-pink rounded-full border-4 border-white shadow-lg z-10">
                  <div className="absolute inset-0 bg-romantic-pink rounded-full animate-pulse" />
                </div>

                {/* Event card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="romantic-card rounded-xl p-6 cursor-pointer"
                    onClick={() => toggleExpanded(event._id)}
                  >
                    {/* Date */}
                    <div className={`flex items-center mb-2 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <Calendar className="w-4 h-4 text-romantic-pink mr-2" />
                      <span className="text-sm text-deep-navy/60">
                        {formatDate(event.date)}
                      </span>
                    </div>

                    {/* Title and icon */}
                    <div className={`flex items-center mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <span className="text-2xl mr-3">{event.icon}</span>
                      <h3 className="text-xl font-bold text-deep-navy font-serif">
                        {event.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-deep-navy mb-3">
                      {event.description}
                    </p>

                    {/* Expandable section */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedEvents.has(event._id) ? 'auto' : 0,
                        opacity: expandedEvents.has(event._id) ? 1 : 0
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-soft-rose/30">
                        <p className="text-soft-rose font-script italic">
                          "What I was really thinking: {event.whatIWasThinking}"
                        </p>
                      </div>
                    </motion.div>

                    {/* Toggle button */}
                    <div className={`flex items-center mt-3 text-romantic-pink ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      {expandedEvents.has(event._id) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                      <span className="text-sm ml-1">
                        {expandedEvents.has(event._id) ? 'Less' : 'More'}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="romantic-card rounded-2xl p-6 max-w-2xl mx-auto">
            <Heart className="w-8 h-8 text-romantic-pink mx-auto mb-4" />
            <p className="text-lg text-deep-navy font-serif">
              Every chapter of our story has led us here, 
              and I can't wait to write all the future ones with you.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Timeline
