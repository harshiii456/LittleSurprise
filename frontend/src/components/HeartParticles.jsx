import React, { useEffect, useState } from 'react'

const HeartParticles = () => {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = []
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 5,
          animationDuration: 3 + Math.random() * 4,
          size: 10 + Math.random() * 20,
        })
      }
      setHearts(newHearts)
    }

    generateHearts()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle animate-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.animationDelay}s`,
            animationDuration: `${heart.animationDuration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}

export default HeartParticles
