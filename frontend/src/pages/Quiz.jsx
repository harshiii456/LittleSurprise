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

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    fetchQuestions()
  }, [])

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('/api/quiz')
      setQuestions(response.data.data)
    } catch (error) {
      console.error('Error fetching quiz questions:', error)
      // Fallback questions
      setQuestions([
        {
          _id: '1',
          question: 'What day did we first meet?',
          options: ['February 26, 2022', 'March 15, 2022', 'January 1, 2022', 'April 20, 2022'],
          correctAnswer: 0,
          explanation: 'The day that changed everything - February 26, 2022'
        },
        {
          _id: '2',
          question: 'What was our first date activity?',
          options: ['Movie and dinner', 'Coffee and conversation', 'Long walk in park', 'Shopping together'],
          correctAnswer: 1,
          explanation: 'Hours of coffee and conversation that felt like minutes'
        },
        {
          _id: '3',
          question: 'How long have we been together as of today?',
          options: ['1 year', '2 years', '6 months', '3 years'],
          correctAnswer: 1,
          explanation: 'Two amazing years and counting!'
        },
        {
          _id: '4',
          question: 'Where did I say Punjab still owns?',
          options: ['Your phone', 'Your heart', 'Your dreams', 'Your time'],
          correctAnswer: 1,
          explanation: 'Punjab still owns your heart, Bangalore boy!'
        },
        {
          _id: '5',
          question: 'What\'s our special anniversary date?',
          options: ['260224', '14022022', '01012023', '31122022'],
          correctAnswer: 0,
          explanation: 'February 26, 2024 - our special day!'
        }
      ])
    } finally {
      setLoading(false)
    }
  }

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
      setShowResult(true)
      if (score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0) === questions.length) {
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
    let finalScore = score
    if (selectedAnswer === questions[currentQuestion]?.correctAnswer) {
      finalScore += 1
    }
    return finalScore
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
          <p className="text-xl text-soft-rose font-script">
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

              {/* Explanation */}
              <AnimatePresence>
                {answeredQuestions.includes(currentQuestion) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-romantic-pink/10 rounded-xl border border-romantic-pink/30"
                  >
                    <p className="text-deep-navy font-serif">
                      <strong>Explanation:</strong> {questions[currentQuestion]?.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

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
                  {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'}
                </motion.button>
              </motion.div>
            )}
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
