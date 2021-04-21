// Константы

const constants = () => ({
    maxHp: 100,
    healHpIndex: 0.35
})

// Рандом в заданом диапазоне

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



