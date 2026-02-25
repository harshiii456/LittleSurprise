import React, { useState } from 'react'

const Final = () => {
  const [isLocked, setIsLocked] = useState(true)
  const [promise, setPromise] = useState('')

  const handleUnlock = () => {
    if (promise.toLowerCase().includes('promise') || promise.toLowerCase().includes('i promise')) {
      setIsLocked(false)
    } else {
      alert('You need to make a real promise! 💕')
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      {isLocked ? (
        <div className="text-center max-w-md w-full">
          <div className="romantic-card rounded-3xl p-8 shadow-2xl">
            <h1 className="text-2xl font-bold text-deep-navy font-serif mb-4">
              Only open if you promise not to cry
            </h1>
            <p className="text-deep-navy/70 mb-6 font-serif">
              This is our final chapter. Are you ready?
            </p>
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
            <button
              onClick={handleUnlock}
              disabled={!promise.trim()}
              className="romantic-button text-white font-bold py-3 px-8 rounded-full w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              I Promise
            </button>
            <p className="text-xs text-deep-navy/40 mt-4 font-serif">
              This moment is just for us
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-deep-navy font-serif mb-6">
            Happy Anniversary
          </h1>
          <p className="text-lg text-deep-navy font-serif mb-6">
            2 years. 1 month distance. Zero doubts.
          </p>
          <p className="text-xl">— Tingu ❤️</p>
          
          <button
            onClick={() => window.open('https://drive.google.com/drive/folders/1Ski5w31drXkvOzUrTmHdrPBAa4J3EpkX', '_blank')}
            className="romantic-button text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center"
          >
            Open this link
          </button>
          
          <p className="text-deep-navy/60 font-serif mt-8">
            Mingu & Tingu — Always.
          </p>
        </div>
      )}
    </div>
  )
}

export default Final
