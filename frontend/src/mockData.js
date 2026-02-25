// Mock data for static deployment (no backend needed)
export const mockTimelineEvents = [
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
];

export const mockLetters = [
  {
    _id: '1',
    title: 'The way you look at me',
    content: 'Like I\'m the only person in the world, even in a crowded room.',
    category: 'reasons',
    order: 1
  },
  {
    _id: '2',
    title: 'Your patience with my chaos',
    content: 'You handle my mood swings and overthinking with a calm that amazes me.',
    category: 'reasons',
    order: 2
  },
  {
    _id: '3',
    title: 'How you make me laugh',
    content: 'Even on my worst days, you find a way to make me smile.',
    category: 'reasons',
    order: 3
  },
  {
    _id: '4',
    title: 'Your dedication to us',
    content: 'Even with distance, you never let me doubt our love.',
    category: 'reasons',
    order: 4
  },
  {
    _id: '5',
    title: 'The little things',
    content: 'Good morning texts, random calls, remembering tiny details I mention.',
    category: 'reasons',
    order: 5
  },
  {
    _id: '6',
    title: 'I\'m proud of you',
    content: 'More than you\'ll ever know. Every achievement, every step forward.',
    category: 'unsaid',
    order: 1
  },
  {
    _id: '7',
    title: 'I worry about you',
    content: 'When you\'re stressed, when you\'re tired, when you work too hard.',
    category: 'unsaid',
    order: 2
  },
  {
    _id: '8',
    title: 'I imagine our future',
    content: 'Randomly, in the middle of the day. Little moments we\'ll share.',
    category: 'unsaid',
    order: 3
  },
  {
    _id: '9',
    title: 'I\'ll always choose you',
    content: 'Every morning, every decision, every crossroads - it\'s always you.',
    category: 'promises',
    order: 1
  },
  {
    _id: '10',
    title: 'I\'ll support your dreams',
    content: 'Even when they scare me, even when they take you far away.',
    category: 'promises',
    order: 2
  },
  {
    _id: '11',
    title: 'I\'ll love you through the distance',
    content: 'Until we close every mile between us and more.',
    category: 'promises',
    order: 3
  }
];

export const mockQuizQuestions = [
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
];

export const mockMissYouMessages = [
  {
    _id: '1',
    message: 'Every mile between us makes my heart beat stronger for you.',
    category: 'miss'
  },
  {
    _id: '2',
    message: 'I miss you more than words can say, but I know this distance is temporary.',
    category: 'miss'
  },
  {
    _id: '3',
    message: 'Even when we\'re apart, you\'re always in my thoughts.',
    category: 'love'
  },
  {
    _id: '4',
    message: 'Counting the days until I can hold you again.',
    category: 'miss'
  },
  {
    _id: '5',
    message: 'Distance means so little when someone means so much.',
    category: 'romantic'
  },
  {
    _id: '6',
    message: 'You\'re worth every moment of this wait.',
    category: 'love'
  },
  {
    _id: '7',
    message: 'I fall in love with you all over again every time we talk.',
    category: 'romantic'
  },
  {
    _id: '8',
    message: 'This distance is just a test of how strong our love really is.',
    category: 'funny'
  }
];

export const mockOpenWhenCards = [
  {
    _id: '1',
    title: 'Open When You Miss Me',
    trigger: 'miss',
    content: 'Close your eyes. Remember the last time we laughed together. I\'m right there with you, in that memory. Distance is temporary, but our love is infinite.',
    emoji: '💔'
  },
  {
    _id: '2',
    title: 'Open When You\'re Stressed',
    trigger: 'stressed',
    content: 'Take a deep breath. You\'re doing amazing, even when it doesn\'t feel like it. I believe in you more than you know. Now go crush whatever\'s in your way.',
    emoji: '😰'
  },
  {
    _id: '3',
    title: 'Open When You Need a Laugh',
    trigger: 'laugh',
    content: 'Remember that time you tried to cook and almost burned the kitchen? Or when you made that terrible joke and I still laughed? You\'re my favorite comedian.',
    emoji: '😂'
  },
  {
    _id: '4',
    title: 'Open When You\'re Happy',
    trigger: 'happy',
    content: 'YES! I love when you\'re happy! I wish I could see your smile right now. Tell me everything - I want to celebrate with you, even from miles away.',
    emoji: '🎉'
  },
  {
    _id: '5',
    title: 'Open When You Doubt Us',
    trigger: 'doubt',
    content: 'Hey, stop right there. Look at how far we\'ve come. 2 years. Through distance, through fights, through everything. We\'re still here. That\'s not luck - that\'s us.',
    emoji: '💪'
  }
];

export const mockMemories = [
  {
    _id: '1',
    title: 'First Meeting',
    description: 'The day that started it all',
    whatIWasThinking: 'Nervous, excited, and somehow knowing this was different',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400',
    category: 'milestone',
    date: '2022-02-26'
  },
  {
    _id: '2',
    title: 'Coffee Date',
    description: 'Hours of conversation and laughter',
    whatIWasThinking: 'Like I could talk to you forever',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300',
    category: 'memory',
    date: '2022-03-05'
  },
  {
    _id: '3',
    title: 'Rainy Day Walk',
    description: 'Getting soaked but not caring',
    whatIWasThinking: 'Free and completely myself with you',
    image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400',
    category: 'memory',
    date: '2022-06-15'
  },
  {
    _id: '4',
    title: 'First Anniversary',
    description: '365 days of choosing us',
    whatIWasThinking: 'Grateful for every moment',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500',
    category: 'milestone',
    date: '2023-02-26'
  },
  {
    _id: '5',
    title: 'Late Night Calls',
    description: 'Falling asleep to your voice',
    whatIWasThinking: 'Safe, loved, and completely yours',
    image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=300',
    category: 'memory',
    date: '2023-08-20'
  },
  {
    _id: '6',
    title: 'The Day You Left',
    description: 'Hardest goodbye, strongest promise',
    whatIWasThinking: 'Heartbroken but hopeful',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400',
    category: 'milestone',
    date: '2024-01-15'
  }
];
