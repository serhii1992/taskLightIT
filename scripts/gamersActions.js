// Обработка действий игроков

const gamersActions = (player, otherPlayer, randomSkills) => {
  console.log(`Действия игрока ${player.name}:`)
  if (randomSkills === 1) { // урон в диапазоне 18-25
    let damage = player.lowDamage()
    otherPlayer.hp -= damage
    if (otherPlayer.hp <= 0) otherPlayer.hp = 0
    console.log(`${player.name} наносит ${damage} урона (диапазон 18 - 25 )`)
    console.log(`     У игрока ${player.name}: ${player.hp} здоровья`)
    console.log(`     У игрока ${otherPlayer.name}: ${otherPlayer.hp} здоровья`)
  }

  if (randomSkills === 2) { // урон в диапазоне 10-35
    let damage = player.highDamage()
    otherPlayer.hp -= damage
    if (otherPlayer.hp <= 0) otherPlayer.hp = 0

    console.log(`${player.name} наносит ${damage} урона (диапазон 10 - 35 )`)
    console.log(`      У игрока ${player.name}: ${player.hp} здоровья`)
    console.log(`      У игрока ${otherPlayer.name}: ${otherPlayer.hp} здоровья`)
  }

  if (randomSkills >= 3) { // востановление здоровья
    let heal = player.heal()
    player.hp = player.hp + heal
    player.hp > constants().maxHp ? player.hp = constants().maxHp : player.hp
    console.log(`${player.name} востанавливает ${heal} здоровья `)
    console.log(`      У игрока ${player.name}: ${player.hp} здоровья`)
    console.log(`      У игрока ${otherPlayer.name}: ${otherPlayer.hp} здоровья`)
  }
}