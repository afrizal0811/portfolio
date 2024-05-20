export const menuList = ['home', 'about', 'projects', 'contact']
export const aboutChoicesList = [
  {
    id: 0,
    response: `What's your name?`,
    explain: 'Hi! My name is Afrizal Maulana.',
  },
  {
    id: 1,
    response: 'Where do you come from?',
    explain: 'I come from Probolinggo, East Java, Indonesia.',
  },
  {
    id: 2,
    response: 'What do you like?',
    explain: `I’m passionate when it comes to new games, technologies and always curious to learn more creative coding, especially about web developer.`,
  },
]

export const initialProjectChoicesList = [
  {
    id: 0,
    response: `Sure!`,
    explain: 'These are some of my projects. Take a look!',
  },
]

const acceptResponses = [
  `Of course!`,
  `Absolutely!`,
  `Sure,  thank you!`,
  `That would be nice!`,
  `Yes, I'd love to! `,
  `Yes, please!`,
  `That's a good idea!`,
  `Sounds great!`,
  `Let's go for it!`,
  `That would be great!`,
]

const refuseResponses = [
  `Not today.`,
  `Thanks, but I'm good.`,
  `Maybe next time.`,
  `I'm sorry, but I can't.`,
  `No, thanks.`,
  `That's alright.`,
  `Not for me, thanks.`,
  `I'll pass.`,
  `I'll have to skip it.`,
  `Nah, I'm alright.`,
]

export const projectSelectedChoicesList = (random) => {
  const acceptNum = Math.floor(Math.random() * random)
  const refuseNum = Math.floor(Math.random() * random)
  const responses = [acceptResponses[acceptNum], refuseResponses[refuseNum]]
  
  return [
    {
      response: responses,
      id: 0,
      explain:
        'This is crowdfunding application. Build with React.Js and Express.Js. Check this out!',
    },
    {
      id: 1,
      response: responses,
      explain:
        'This is web customer for car rental and created for final exam in Binar Academy Bootcamp. Build with React.Js. Check this out!',
    },
  ]
}

export const contactChoicesList = [
  {
    id: 0,
    response: [
      {
        type: 'E-mail',
        link: 'afrizalmaulanamuh@gmail.com',
      },
      {
        type: 'LinkedIn',
        link: 'https://www.linkedin.com/in/afrizalmaulanamuh/',
      },
      {
        type: 'Github',
        link: 'https://github.com/afrizal0811',
      },
    ],
    explain:
      'Thank you so much for visiting! You can contact me through these links.',
  },
]
