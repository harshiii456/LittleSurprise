import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import axios from 'axios'
import { Heart, HelpCircle, Trophy, RotateCcw } from 'lucide-react'

const Quiz = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(true)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [showWarning, setShowWarning] = useState(true)

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    // Use local data instead of API fetch
    const localQuestions = [
        {
          _id: '1',
          question: 'What day did we first meet?',
          options: ['august 21, 2023', 'august 15, 2023', 'august 24, 2023', 'august 22, 2023'],
          correctAnswer: 3
        },
        {
          _id: '2',
          question: 'What was our first date activity?',
          options: ['Watching movie', 'Coffee and conversation', 'Long walk in park', 'Shopping together'],
          correctAnswer: 0
        },
        {
          _id: '3',
          question: 'What is my favorite memory of ours?',
          options: ['DJ nights', 'Late night coversations', 'Getting ready for u', 'Making food for u'],
          correctAnswer: 3
        },
        {
          _id: '4',
          question: 'What is my favorite gift from you?',
          options: ['Reading Books', 'Letters', 'Chocolates', 'Moon Lamp'],
          correctAnswer: 1
        }
      ]
      setQuestions(localQuestions)
    setLoading(false)
  }, [])

  const handleAnswerSelect = (answerIndex) => {
    if (answeredQuestions.includes(currentQuestion)) return
    
    setSelectedAnswer(answerIndex)
    setAnsweredQuestions([...answeredQuestions, currentQuestion])
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      // For the last question, update score if needed before showing results
      if (selectedAnswer === questions[currentQuestion].correctAnswer && !answeredQuestions.includes(currentQuestion)) {
        setScore(score + 1)
      }
      setShowResult(true)
      // Check if perfect score for confetti
      const finalScore = selectedAnswer === questions[currentQuestion].correctAnswer ? score + 1 : score
      if (finalScore === questions.length) {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 10000)
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setAnsweredQuestions([])
    setShowConfetti(false)
  }

  const calculateFinalScore = () => {
    return score
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
          <p className="text-deep-navy font-script text-xl">Preparing our love quiz...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
        />
      )}

      {/* Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="romantic-card rounded-2xl p-8 max-w-md w-full text-center"
          >
            <div className="text-6xl mb-6">⚠️</div>
            <h2 className="text-2xl font-bold text-deep-navy font-serif mb-4">
              Quiz Warning
            </h2>
            <p className="text-lg text-deep-navy font-serif mb-6">
              if you get even 1 wrong, i will kill u
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowWarning(false)}
              className="romantic-button text-white font-bold py-3 px-8 rounded-full text-lg"
            >
              I Accept My Fate
            </motion.button>
          </motion.div>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy font-serif mb-4">
            How Well Do You Know Us?
          </h1>
          <p className="text-3xl md:text-4xl font-script text-deep-navy mb-8 font-bold">
            Test your knowledge of our love story
          </p>
        </motion.div>

        {!showResult ? (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-deep-navy mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>Score: {score}/{questions.length}</span>
              </div>
              <div className="w-full bg-white rounded-full h-3 border border-soft-rose/30">
                <motion.div
                  className="bg-gradient-to-r from-romantic-pink to-soft-rose h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Question Card */}
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="romantic-card rounded-2xl p-8 mb-6"
            >
              <div className="flex items-center mb-6">
                <HelpCircle className="w-8 h-8 text-romantic-pink mr-3" />
                <h2 className="text-2xl font-bold text-deep-navy font-serif">
                  {questions[currentQuestion]?.question}
                </h2>
              </div>

              {/* Answer Options */}
              <div className="space-y-3">
                {questions[currentQuestion]?.options.map((option, index) => {
                  const isCorrect = index === questions[currentQuestion].correctAnswer
                  const isSelected = index === selectedAnswer
                  const hasAnswered = answeredQuestions.includes(currentQuestion)

                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: hasAnswered ? 1 : 1.02 }}
                      whileTap={{ scale: hasAnswered ? 1 : 0.98 }}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={hasAnswered}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                        hasAnswered
                          ? isCorrect
                            ? 'bg-green-50 border-green-300 text-green-800'
                            : isSelected
                            ? 'bg-red-50 border-red-300 text-red-800'
                            : 'bg-gray-50 border-gray-200 text-gray-600'
                          : 'bg-white border-soft-rose/30 hover:border-romantic-pink hover:bg-romantic-pink/10'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                          hasAnswered
                            ? isCorrect
                              ? 'border-green-500 bg-green-500'
                              : isSelected
                              ? 'border-red-500 bg-red-500'
                              : 'border-gray-300'
                            : 'border-romantic-pink'
                        }`}>
                          {hasAnswered && (isCorrect || isSelected) && (
                            <span className="text-white text-sm">✓</span>
                          )}
                        </div>
                        <span className="font-medium">{option}</span>
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              {/* Next Button */}
            {answeredQuestions.includes(currentQuestion) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextQuestion}
                  className="romantic-button text-white font-bold py-3 px-8 rounded-full text-lg"
                >
                  Next
                </motion.button>
              </motion.div>
            )}    </motion.div>
            
          </>
        ) : (
          /* Results */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="romantic-card rounded-2xl p-8">
              <Trophy className="w-16 h-16 text-romantic-pink mx-auto mb-6" />
              
              <h2 className="text-3xl font-bold text-deep-navy font-serif mb-4">
                Quiz Complete!
              </h2>
              
              <div className="text-6xl font-bold text-romantic-pink mb-6">
                {calculateFinalScore()}/{questions.length}
              </div>
              
              <div className="mb-8">
                {calculateFinalScore() === questions.length ? (
                  <div>
                    <p className="text-xl text-deep-navy font-serif mb-4">
                      Perfect score! You really know our story! 🎉
                    </p>
                    <p className="text-lg text-soft-rose font-script">
                      Fine. You win 1 surprise when we meet.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xl text-deep-navy font-serif mb-4">
                      Good try! You got {calculateFinalScore()} out of {questions.length}
                    </p>
                    <p className="text-lg text-soft-rose font-script">
                      Still mine though. 😌
                    </p>
                  </div>
                )}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetQuiz}
                className="romantic-button text-white font-bold py-3 px-8 rounded-full text-lg flex items-center mx-auto"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Try Again
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Quiz
