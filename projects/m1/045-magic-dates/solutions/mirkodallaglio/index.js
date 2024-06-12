function magicDade(){
    let nameMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let isLeap = (year) => new Date(Number(year), 1, 29).getDate() === 29;
    let isLeapArr = [];
    let result = '';
    let magDate = {
        day : [],
        month : [],
        year : [],
        printDate : function (){
            for(z=0; z < this.year.length; z++){
                result += `${this.day[z]} ${this.month[z]} 19${this.year[z]}\n`;
            };
        },
    };
    
    for(i=1; i < 100; i++){
        year = '19' + String(i).padStart(2,0);
        if(isLeap(year)) isLeapArr.push(i);
    };
    //anno 2000 escluso dai calcoli
    for(y=1; y < 100; y++){
        for(m=1; m <= 12; m++){
            for(d=1; d <= 31; d++){
                if((m === 4 || m === 6 || m === 9 || m === 11) && d === 31) continue; // non serve: 31*4 = 124 
                if(isLeapArr.includes(y) && m === 2 && d >29) continue;
                if(m === 2 && d >28) continue;
                 
                if(d * m === y) {
                    magDate['day'].push(d);
                    magDate['month'].push(nameMonth[m-1]);
                    magDate['year'].push(String(y).padStart(2,0));
                };
            };
        };
    };
    magDate.printDate();
    return result;
};

console.log(magicDade());