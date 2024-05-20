import imagePaths from '../constants/imagePaths'

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

export const projectData = [
  {
    id: 0,
    href: 'https://moneypool.co.id/',
    image: imagePaths.webMoneypool,
  },
  {
    id: 1,
    href: 'https://car-rental-afrizal.vercel.app/',
    image: imagePaths.webCarRental,
  },
]

export const initialChoicesList = [
  {
    id: 0,
    response: `Sure!`,
    explain: 'These are some of my projects. Take a look!',
  },
]


export const choicesList = (random) => {
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
