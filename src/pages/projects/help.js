import imagePaths from '../../constants/imagePaths'

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
    href: 'https://car-rental-afrizal.vercel.app/',
    id: 0,
    image: imagePaths.webCarRental,
    isPrivate: false,
    name: 'Car Rental',
  },
  {
    href: 'https://moneypool.co.id/',
    id: 1,
    image: imagePaths.webMoneypool,
    isPrivate: false,
    name: 'Moneypool',
  },
  {
    href: '/private-project',
    id: 2,
    image: imagePaths.webBank.adminLogin,
    isPrivate: true,
    name: 'Bank Artatama',
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
      id: 0,
      response: responses,
      explain:
        'This is web customer for car rental and created for final exam in Binar Academy Bootcamp. Build with React.Js and Bootstrap. Check this out!',
    },
    {
      response: responses,
      id: 1,
      explain:
        'This is crowdfunding application. Build with React.Js and Express.Js. Check this out!',
    },
    {
      id: 2,
      response: responses,
      explain:
        'This is credit application. Build with React Typescript and Express.Js. This application is a private website, but I will show you some screenshots. Check this out!',
    },
  ]
}
