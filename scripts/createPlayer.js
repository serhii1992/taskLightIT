// Создание класса игрока

class CreatePlayer {
  constructor(name) {
    this.name = name
    this.hp = constants().maxHp
  }

  lowDamage = () => {
   return  random(18, 25)
  }

  highDamage = () => {
  return   random(10, 35)
  }

  heal = () => {
   return  random(10, 35)
  }
}

const player = new CreatePlayer('Serhii')
const computer = new CreatePlayer('Mackentosh')

