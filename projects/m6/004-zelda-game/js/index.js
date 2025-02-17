const fs = require('fs');
const readline = require('readline');
const { processCommand } = require('./function');

const START_TEXT = fs.readFileSync('Start.txt', 'utf8');
const END_DEAD_TEXT = fs.readFileSync('EndDead.txt', 'utf8');
const END_WIN_TEXT = fs.readFileSync('EndWin.txt', 'utf8');
const END_LOSE_TEXT = fs.readFileSync('EndLose.txt', 'utf8');

let lastCommand = "";

let gameData = {
  currentRoom: 1,
  bag: [],
  message: "",
  gameStatus: 'alive', 
  princessFreed: false,
  money: 0,
  rooms: {
    '1': {
      generateDescription: function() {
        let baseDescription = "Ti trovi in una stanza illuminata con un'uscita a ovest.";
        if (this.items.length > 0) {
            let itemsDescription = this.items.map(item => " " + item).join(', ');
            return baseDescription + " Questi oggetti sono stati lasciati nella stanza:" + itemsDescription + ".";
        } else {
            return baseDescription;
        }
    },
    north: null,
    south: '4',
    east: '2',
    west: null,
    items: [],
    monster: null
},
    '2': {
      generateDescription: function() {
        let baseDescription = "Questa è una stanza lucente.";
        if (this.items.length > 0) {
          let additionalDescription = "";
          
          // Estrai le descrizioni degli oggetti
          let itemsDescription = this.items.map(item => {
            if (typeof item === 'object') {
              return " " + item.name;  
            } else {
              return " " + item;  
            }
          }).join(', ');
      
          additionalDescription += " Questi oggetti sono stati lasciati nella stanza:" + itemsDescription + ".";
                  
          return baseDescription + additionalDescription;
        } else {
          return baseDescription + " Non c'è niente nella stanza.";
        }
      },
        north: null,
        south: '5',
        east: '3',
        west: '1',
        items: [{name: 'uovo dorato', value: 500000}],
        monster: null,
    },
    '3': {
       generateDescription: function() {
        let baseDescription = "Questa è una stanza molto buia. Si vede a malapena.";
        if (this.items.length > 0) {
          let additionalDescription = "";
          
          let itemsDescription = this.items.map(item => {
            if (typeof item === 'object') {
              return " " + item.name; 
            } else {
              return " " + item;  
            }
          }).join(', ');

          additionalDescription += " Questi oggetti sono stati lasciati nella stanza:" + itemsDescription + ".";
                  
          return baseDescription + additionalDescription;
        } else {
          return baseDescription + " Non c'è niente nella stanza.";
        }
    },
    north: null,
    south: null,
    east: null,
    west: '2',
    items: [{name: 'scudo magico', value: 0}],
    monster: null
},
    '4': {
      generateDescription: function() {
        let baseDescription = "Questa è una stanza luminosa.";
        if (this.items.length > 0) {
          let additionalDescription = "";

         
          let itemsDescription = this.items.map(item => {
            if (typeof item === 'object') {
              return " " + item.name;  
            } else {
              return " " + item;  
            }
          }).join(', ');

          additionalDescription += " Questi oggetti sono stati lasciati nella stanza:" + itemsDescription + ".";
                  
          return baseDescription + additionalDescription;
        } else {
          return baseDescription + " Il piedistallo è vuoto.";
        }
    },
    north: '1',
    south: null,
    east: null,
    west: null,
    items: [{name: 'calice dorato', value: 500000}],
    monster: null
},
    '5': {
      generateDescription: function() {
        let baseDescription = "Stanza centrale del castello.";
        
        let isMedusaAlive = gameData.monsters['Medusa'].alive;
        
        let monsterDescription = isMedusaAlive ? " Con Medusa in attesa." : " Medusa è stata sconfitta.";
        
        if (this.items.length > 0 || this.monster) {
          let additionalDescription = monsterDescription;

          let itemsDescription = this.items.map(item => {
            if (typeof item === 'object') {
              return " " + item.name; 
            } else {
              return " " + item; 
            }
          }).join(', ');

          if (itemsDescription) {
            additionalDescription += " Questi oggetti sono stati lasciati nella stanza:" + itemsDescription + ".";
          }
          
          return baseDescription + additionalDescription;
        } else {
          return baseDescription + monsterDescription + " Non c'è niente nella stanza.";
        }
    },
    north: '2',
    south: null,
    east: '6',
    west: null,
    items: [],
    monster: 'Medusa',
    linkedRooms: [] 
},
      '6': {
        generateDescription: function() {
          let baseDescription = "Una stanza fredda e oscura.";
          
          let isDraculaAlive = gameData.monsters['Dracula'].alive;
          
          let monsterDescription = isDraculaAlive ? " Con Mr. Dracula in attesa." : " Mr. Dracula è stato sconfitto.";
          
          if (this.items.length > 0 || this.monster) {
            let additionalDescription = monsterDescription;
      
            let additionalItems = this.items;
            if (additionalItems.length > 0) {
              let itemsDescription = additionalItems.map(item => " " + item).join(', ');
              additionalDescription += " Questi oggetti sono stati lasciati nella stanza:" + itemsDescription + ".";
            }
      
            return baseDescription + additionalDescription;
          } else {
            return baseDescription + monsterDescription + " Non c'è niente nella stanza.";
          }
        },
        north: null,
        south: null,
        east: null,
        west: '5',
        items: [],
        monster: 'Dracula'
      },      
    '7': {
      generateDescription: function() {
        let baseDescription = "Questa è una stanza semi illuminata. Anche qui si vede a stento.";
        
        let hasSilverDagger = gameData.bag.includes("pugnale argentato");
        
        let itemDescription = hasSilverDagger ? " C'è un pugnale d'argento in terra." : "";
        
        if (this.items.length > 0) {
          let additionalDescription = itemDescription;

          let itemsDescription = this.items.map(item => {
            if (typeof item === 'object') {
              return " " + item.name;  
            } else {
              return " " + item; 
            }
          }).join(', ');

          if (itemsDescription) {
            additionalDescription += " Questi oggetti sono stati lasciati nella stanza:" + itemsDescription + ".";
          }
          
          return baseDescription + additionalDescription;
        } else {
          return baseDescription + itemDescription + " Non c'è niente nella stanza.";
        }
    },
    north: null,
    south: null,
    east: '8',
    west: null,
    items: [{name: 'pugnale argentato', value: 0}],
    monster: null
},
    '8': {
      generateDescription: function() {
        let baseDescription = "Questa è una stanza semi illuminata. Fa molto freddo.";
        
        let hasProofOfPnp = gameData.bag.includes("pergamena P=NP");
        
        let itemDescription = hasProofOfPnp ? " C'è un pezzo di carta con la dimostrazione del famoso problema irrisolto P=NP." : "";
        
        if (this.items.length > 0) {
          let additionalDescription = itemDescription;

          let itemsDescription = this.items.map(item => {
            if (typeof item === 'object') {
              return " " + item.name;  
            } else {
              return " " + item;  
            }
          }).join(', ');

          if (itemsDescription) {
            additionalDescription += " Questi oggetti sono stati lasciati nella stanza:" + itemsDescription + ".";
          }
          
          return baseDescription + additionalDescription;
        } else {
          return baseDescription + itemDescription + " Non c'è niente nella stanza.";
        }
    },
    north: '5',
    south: null,
    east: null,
    west: '7',
    items: [{name: 'pergamena P=NP', value: 500000}],
    monster: null,
    linkedRooms: [] 
},
    '9': {
      generateDescription: function() {
        let baseDescription = gameData.princessFreed ? 
          "La stanza finale, dove la principessa era tenuta prigioniera." : 
          "La stanza finale, dove la principessa è tenuta prigioniera.";
  
        if (this.items.length > 0) {
          let additionalDescription = "";
          
          if (this.items.includes("princess")) {
            additionalDescription += " La principessa è qui, legata ad una sedia.";
          }
  
          let additionalItems = this.items.filter(item => item !== "princess");
          if (additionalItems.length > 0) {
            let itemsDescription = additionalItems.map(item => " " + item).join(', ');
            additionalDescription += " Questi oggetti sono stati lasciati nella stanza:" + itemsDescription + ".";
          }
          
          return baseDescription + additionalDescription;
        } else {
          return baseDescription + " Sembra che la stanza sia vuota.";
        }
      },
      north: '6',
      south: null,
      east: null,
      west: null,
      items: ['princess'],
      monster: null
  }
},
  monsters: {
        'Medusa': {
            description: "Una donna con serpenti al posto dei capelli. Ucciderla apre un percorso tra la stanza 5 e la stanza 8.",
            weaponRequired: 'scudo magico',
            alive: true
        },
        'Dracula': {
            description: "Un vampiro inquietante. Ucciderlo apre un percorso tra la stanza 6 e la stanza 9.",
            weaponRequired: 'pugnale argentato',
            alive: true
        }
    }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startGame() {
  try {
    console.log(START_TEXT); 
    showStatus(gameData);

    rl.on('line', function(input) {
      const command = input.trim();
      lastCommand = command.split(' ')[0];
      gameData = processCommand(command, gameData);
      
      if (gameData.gameStatus === 'win') {
          console.log(END_WIN_TEXT);
          process.exit();
      } else if (gameData.gameStatus === 'lose') {
          console.log(END_LOSE_TEXT);
          process.exit();
      } else if (gameData.gameStatus === 'dead') {
          console.log(END_DEAD_TEXT);
          process.exit();
      }
      showStatus(gameData);
    });
  } catch (error) {
    console.error("Si è verificato un errore in startGame: ", error);
  }
}

function showStatus(gameData) {
  try {
    const currentRoom = gameData.currentRoom;
    const roomInfo = gameData.rooms[currentRoom];
    
    if (lastCommand !== 'GUARDA') {      
      let description = roomInfo.description;
      
      if (typeof roomInfo.generateDescription === 'function') {
          description = roomInfo.generateDescription();
      }
      
      console.log(`Ti trovi nella stanza ${currentRoom}. ${description}`);
    }
    
    console.log(`Stanze accessibili: ${roomInfo.north ? 'Nord, ' : ''}${roomInfo.south ? 'Sud, ' : ''}${roomInfo.east ? 'Est, ' : ''}${roomInfo.west ? 'Ovest, ' : ''}`);
    
    console.log(`Oggetti nella borsa: ${gameData.bag.length > 0 ? gameData.bag.map(item => item.name).join(', ') : 'Nessuno'}`);
    
    console.log(`Denaro: ${gameData.money}`);
    
    console.log("Cosa vuoi fare?\n");
  } catch (error) {
    console.error("Si è verificato un errore in showStatus: ", error);
  }
}

startGame();