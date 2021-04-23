const startGame = (pl1, pl2) => {
  console.warn('!!!!!!!!!!!!!!!!!!!!!!!!!!!THE BATTLE BEGIN!!!!!!!!!!!!!!!!!!!!!!!!')

  // Игроки выполняют действия пока их здоровья больше нуля
  let i = 0
  while (pl1.hp > 0 && pl2.hp > 0) {
    console.log(`******************************ХОД № ${++i}******************************`)

    let randomMovePlayer = random(1, 2)  // Рандом игрока, который будет совершать действие

    if (randomMovePlayer === 1) { // число 1 - первый игрок
      // Рандом действий
      let randomSkills = random(1, 3) // 1 - урон 18-25, 2 - 10-35, 3 - востановление здоровья
      // обработка действий игрока
      gamersActions(pl1, pl2, randomSkills)
    }
    if (randomMovePlayer === 2) { // // число 2 - второй игрок
      let randomSkills;
      const minHp = constants().maxHp * constants().healHpIndex

      if (pl2.hp <= minHp) {
        randomSkills = random(1, 4)  // 1 - урон 18-25, 2 - урон 10-35, 3,4 - востановление здоровья
      } else {
        randomSkills = random(1, 3) // 1 - урон 18-25, 2 - урон 10-35, 3 - востановление здоровья
      }
      // обработка действий игрока
      gamersActions(pl2, pl1, randomSkills)
    }
  }

  if (pl1.hp === 0) console.log(`ПОБЕДИЛ ${pl2.name}`)
  if (pl2.hp === 0) console.log(`ПОБЕДИЛ ${pl1.name}`)

  console.warn('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
}

// запускаем приложение и предаем в функцию 2 экземпляра класса игрока
startGame(player, computer)