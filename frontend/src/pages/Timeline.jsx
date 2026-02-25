import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Heart, Calendar, ChevronDown, ChevronUp } from 'lucide-react'

const Timeline = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedEvents, setExpandedEvents] = useState(new Set())

  useEffect(() => {
    // Use local data instead of API fetch
    const localEvents = [
        {
          _id: '1',
          title: 'The Day We Met',
          date: '2023-08-22',
          description: 'Jaha sb kuch change ho geya',
          whatIWasThinking: 'Bhai ye kon hai???.. (mujhe to tu first look me psnd hi ni aya tha...hehehe)',
          icon: '💫',
          order: 1
        },
        {
          _id: '2',
          title: 'First Conversation',
          date: '2023-08-22',
          description: 'Jaha tune mujhe Judje kiya hoga pkaaa',
          whatIWasThinking: 'Ki mein prince Narula se kese baat kru or kyaaaa...hahah',
          icon: '💬',
          order: 2
        },
        {
          _id: '3',
          title: 'The Moment I Knew',
          date: '2024-02-19',
          description: 'Jb mujhe pka surety ho gyi',
          whatIWasThinking: 'bhai us din mujhe surety ho gyi thi, ki haan ye sirf dosti nhi usse kuch to zyada hai',
          icon: '💕',
          order: 3
        },
        {
          _id: '4',
          title: 'First Date',
          date: '2024-10-04',
          description: 'humari starting',
          whatIWasThinking: 'vese to vo double date thi (movie date), but jese tu mere sath dance kiya, humne sath me movie dekhi.... loved it',
          icon: '☕',
          order: 4
        },
        {
          _id: '5',
          title: 'Fights We Survived',
          date: 'hr roz',
          description: 'hr ldai se hum strong hue hai',
          whatIWasThinking: 'humari hr ldai me tune sirf mujhe smjha hai, khud ka point of view rkhne se pehle tune mujhe suna hai...thnku baby',
          icon: '💪',
          order: 5
        },
        {
          _id: '6',
          title: '1 Year Strong',
          date: '2025-02-26',
          description: '365 days of choosing you every single morning.',
          whatIWasThinking: 'One year down, and I\'d choose you again in every lifetime.',
          icon: '🎉',
          order: 6
        },
        {
          _id: '7',
          title: 'The Day You Left me alone',
          date: '2026-01-28',
          description: 'The hardest goodbye, but not the end of our story.',
          whatIWasThinking: 'I cant tell u mein kitna royi thi room ake.....',
          icon: '✈️',
          order: 7
        },
        {
          _id: '8',
          title: '2 Years Today – Still Obsessed',
          date: '2026-02-26',
          description: '730 days and I\'m still falling for you.',
          whatIWasThinking: 'After all this time, my heart still races when I think of you. Always will.',
          icon: '👑',
          order: 8
        }
      ]
      setEvents(localEvents)
    setLoading(false)
  }, [])

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
          <p className="text-3xl md:text-4xl font-script text-deep-navy mb-8 font-bold">
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
