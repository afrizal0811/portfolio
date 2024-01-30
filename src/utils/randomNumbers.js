const randomNumber = (min, max) => {
  const floatRandom = Math.random()

  const difference = max - min

  const random = difference * floatRandom

  const randomWithinRange = random + min

  return randomWithinRange
}

export const getRandom = () => {
  let numberArrays = []

  for (let i = 0; i < 10; i++) {
    numberArrays.push(randomNumber(0, 0.05))
  }
  numberArrays.unshift(1,1)
  numberArrays.push(1,1)
  return numberArrays
}
