
//making change


const  money = 120.55;

const cashMoney = money;

const allChanges = [200,100,50,20,10];

const finalResult = allChanges.map(values =>{

    if(money <=0) return `Please insert the money`;
     const changes = Math.floor((money/ values) * 100);
     money = money - (changes * values) / 100;
     return changes;

});

console.log(`${cashMoney} Euros composed of ${finalResult[0].toFixed(2)} Euros  by 2 parts,Euros composed of ${finalResult[1].toFixed(2)} Euros  by 1 parts`);
