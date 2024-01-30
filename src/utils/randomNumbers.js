const randomNumber = (min, max) => {
  const floatRandom = Math.random()

  const difference = max - min

  const random = difference * floatRandom

  const randomWithinRange = random + min

  return randomWithinRange
}

export const getRandom = (min, max) => {
  let numberArrays = []

  for (let i = 0; i < 10; i++) {
    numberArrays.push(randomNumber(min, max))
  }
  numberArrays.unshift(1, 0)
  numberArrays.push(1, 1)
  return numberArrays
}
