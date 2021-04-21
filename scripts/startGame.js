
const startGame = (pl1, pl2) => {
  console.warn('!!!!!!!!!!!!!!!!!!!!!!!!!!!THE BATTLE BEGIN!!!!!!!!!!!!!!!!!!!!!!!!')

  // Игроки выполняют действия пока их здоровья больше нуля
  let i = 0 // номер итерации хода
  while (pl1.hp > 0 && pl2.hp > 0) {
    console.log(`******************************ХОД № ${++i}******************************`)
    // Рандомый выбор игрока, который будет совершать действие (число 1 - 1й игрок, 2 - 2й игрок)
    let randomMovePlayer = random(1, 2)

    if (randomMovePlayer === 1) {
      // Рандом действий
      let randomSkills = random(1, 3) // 1 - диапазон урона 18-25, 2 - диапазон урона 10-35, 3 -востановление здоровья
      gamersActions(pl1, pl2, randomSkills)
    }
    if (randomMovePlayer === 2) {
      let randomSkills;
      // повышенная вероятность востановления здоровья в случае снижения его ниже указаного индекса
      if (pl2.hp <= constants().maxHp * constants().healHpIndex) {
        randomSkills = random(1, 4)  // при рандоме числа 3 или 4 сработает дествие востановления здоровья
      } else {
        randomSkills = random(1, 3)
      }
      gamersActions(pl2, pl1, randomSkills)
    }
  }

  if (pl1.hp === 0) console.log(`ПОБЕДИЛ ${pl2.name}`)
  if (pl2.hp === 0) console.log(`ПОБЕДИЛ ${pl1.name}`)

  console.warn('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
}

startGame(player, computer)