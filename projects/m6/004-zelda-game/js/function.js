function processCommand(command, gameData, lastcommand) {
  try {
    lastCommand = command.split(' ')[0];  
    const splitCommand = command.split(' ');

    switch (splitCommand[0]) {
      case 'COMANDI':
        console.log('Comandi possibili: MUOVI [muovi nella direzione N,E,S,O], PRENDI [prendi oggetto], LASCIA [oggetto], GUARDA [guarda la stanza], ATTACCA [attacca il mostro], LIBERA [libera la principessa], ESCI [esci dal gioco]');
        break;
      case 'MUOVI':
          gameData = move(splitCommand[1], gameData);
          break;
      case 'PRENDI':
          gameData = pick(splitCommand.slice(1).join(' '), gameData);
          break;
      case 'LASCIA':
          gameData = drop(splitCommand.slice(1).join(' '), gameData);
          break;
      case 'ESCI':
          process.exit();
          break;
          case 'ATTACCA':
            if (splitCommand.length > 1) {
                const monsterToAttack = splitCommand.slice(1).join(' ');
                gameData = attack(monsterToAttack, gameData);
            } else {
                console.log('Devi specificare il nome del mostro da attaccare.');
            }
            break;
            case 'LIBERA':
  if (gameData.currentRoom === 9 && !gameData.princessFreed) {  
    console.log("Bravo. Hai liberato la principessa. Ora puoi tornare all'uscita per uscire dal labirinto.");
    gameData.princessFreed = true;  


    const princessIndex = gameData.rooms[9].items.indexOf('princess');
    if (princessIndex > -1) {
      gameData.rooms[9].items.splice(princessIndex, 1);
    }

  } else if (gameData.currentRoom === 9 && gameData.princessFreed) {  
    console.log('Hai già liberato la principessa.');
  } else {
    console.log('Non ci sono principesse da liberare qui.');
  }
  break;
      case 'GUARDA':
          look(gameData);
          break;
      default:
          console.log('Comando non riconosciuto.');
  }

  return gameData;

  } catch (error) {
    console.error("Si è verificato un errore in processCommand: ", error);
    return gameData;  
  }
}

const validMoves = {
  1: ['E', 'S', 'O'],
  2: ['O', 'E', 'S'],
  3: ['O'],
  4: ['N'],
  5: ['N', 'S', 'E'],
  6: ['O', 'S'],
  7: ['E'],
  8: ['N', 'O'],
  9: ['N']
};


function move(direction, gameData) {
  try {
    const currentRoom = gameData.currentRoom;

  if (gameData.monsters["Medusa"].alive && validMoves[5].includes('S')) {
    const index = validMoves[5].indexOf('S');
    validMoves[5].splice(index, 1);
  }
  if (!gameData.monsters["Medusa"].alive && !validMoves[5].includes('S')) {
    validMoves[5].push('S');
  }

  if (gameData.monsters["Dracula"].alive && validMoves[6].includes('S')) {
    const index = validMoves[6].indexOf('S');
    validMoves[6].splice(index, 1);
  }
  if (!gameData.monsters["Dracula"].alive && !validMoves[6].includes('S')) {
    validMoves[6].push('S');
  }

  const mazeLayout = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  let rowIndex = Math.floor((currentRoom - 1) / 3);
  let colIndex = (currentRoom - 1) % 3;

  if (validMoves[currentRoom].includes(direction)) {
    if (direction === 'N') {
      rowIndex -= 1;
    } else if (direction === 'S') {
      rowIndex += 1;
    } else if (direction === 'O') {
      colIndex -= 1;
    } else if (direction === 'E') {
      colIndex += 1;
    }

    const newPosition = mazeLayout[rowIndex][colIndex];
    gameData.currentRoom = newPosition;

  } else {
    console.log("Non puoi muoverti in quella direzione da questa stanza.");
  }

  if (currentRoom === 1 && direction === 'O') {
    if (gameData.princessFreed) {
      gameData.gameStatus = 'win';
    } else {
      gameData.gameStatus = 'lose';
    }
  }

  return gameData;

  } catch (error) {
    console.error("Si è verificato un errore in move: ", error);
    return gameData; 
  }
}

function pick(item, gameData) {
  try {
    const currentRoom = gameData.currentRoom;
  const roomItems = gameData.rooms[currentRoom].items;

  const pickedItem = roomItems.find(it => it.name === item);

  if (pickedItem) {
    if (gameData.bag.length < 4) {  
      if (!gameData.bag.some(bagItem => bagItem.name === pickedItem.name)) {
        gameData.bag.push(pickedItem);  
        console.log(`Hai raccolto l'oggetto ${pickedItem.name} con successo!`);

        
        if (pickedItem.value) {
          gameData.money += pickedItem.value;
        }

        const index = roomItems.indexOf(pickedItem);
        roomItems.splice(index, 1);
      } else {
        console.log(`Hai già raccolto l'oggetto ${pickedItem.name}.`);
      }
    } else {
      console.log(`Il tuo sacco è pieno. Devi lasciare un oggetto prima di poter raccogliere ${pickedItem.name}.`);
    }
  } else {
    console.log(`L'oggetto ${item} non si trova in questa stanza.`);
  }

  return gameData;

  } catch (error) {
    console.error("Si è verificato un errore in pick: ", error);
    return gameData;  
  }
}

function drop(item, gameData) {
  try {
    
  const index = gameData.bag.findIndex(bagItem => bagItem.name === item);
  
  if (index >= 0) {
    const droppedItem = gameData.bag.splice(index, 1)[0];  
    
    
    if (droppedItem.value) {
      gameData.money -= droppedItem.value;
    }
    
    if (gameData.money < 0) {
      gameData.money = 0;
    }
    
    const currentRoom = gameData.currentRoom;
    gameData.rooms[currentRoom].items.push(droppedItem);  
    
    console.log(`Hai lasciato ${item} nella stanza.`);
  } else {
    console.log(`Non hai ${item} nel tuo sacco.`);
  }
  
  return gameData;

  } catch (error) {
    console.error("Si è verificato un errore in drop: ", error);
    return gameData;  
  }
}

function attack(monsterToAttack, gameData) {
  try {
    const currentRoom = gameData.currentRoom;
  const monsterName = monsterToAttack;
  const monsterInRoom = gameData.rooms[currentRoom].monster; 
  const playerBag = gameData.bag;

  const hasShield = playerBag.some(item => item.name === "scudo magico");

  if (monsterInRoom === monsterName) { 
      const monster = gameData.monsters[monsterName]; 

      if (monster.alive) {
          if (monsterName === "Medusa") { 
              if (hasShield) {  
                  console.log("Usando lo scudo magico, hai mostrato a Medusa il suo riflesso. Si è trasformata in pietra!");
                  gameData.monsters[monsterName].alive = false; 
                  gameData.rooms[5].south = '8'; 
              } else {
                  console.log("Hai guardato Medusa negli occhi e sei stato trasformato in pietra. Game Over.");
                  gameData.gameStatus = 'dead';
              }
          } else if (monsterName === "Dracula") { 
              const hasDagger = playerBag.some(item => item.name === "pugnale argentato"); 
              if (hasDagger) {
                  console.log("Con il pugnale d'argento, hai colpito Dracula al cuore. L'hai sconfitto!");
                  gameData.monsters[monsterName].alive = false; 
                  gameData.rooms[6].south = '9'; 
              } else {
                  console.log("Hai tentato di attaccare Dracula senza il pugnale d'argento. Lui ti ha ucciso. Game Over.");
                  gameData.gameStatus = 'dead';
              }
          }
      } else {
          console.log(`Il mostro di nome ${monsterToAttack} è già stato sconfitto.`);
      }
  } else {
      console.log(`Non c'è nessun mostro di nome ${monsterToAttack} in questa stanza.`);
  }

  return gameData;

  } catch (error) {
    console.error("Si è verificato un errore in attack: ", error);
    return gameData;  
  }
}


function look(gameData) {
  try {
    const currentRoomNumber = gameData.currentRoom;
    const currentRoom = gameData.rooms[currentRoomNumber];

    if (typeof currentRoom.generateDescription === 'function') {
      console.log(currentRoom.generateDescription());
    } else if (currentRoom.description) {
      console.log(currentRoom.description);
    } else {
      console.log("Non c'è nulla di interessante da vedere qui.");
    }

    if (currentRoom.items && currentRoom.items.length > 0) {
  
      let itemsDescription = currentRoom.items.map(item => {
        if (typeof item === 'object') {
          return item.name;  
        } else {
          return item;  
        }
      }).join(', ');

     
    }
  } catch (error) {
    console.error("Si è verificato un errore in look: ", error);
  }
}

module.exports = {
  processCommand,
  attack,
  look,
  drop,
  pick,
  move
};

