const groupTicket = {
    price : [0,14,23,18],   //prices for age groups in ascending order 0-2 / 3-12 / 13-64 / over 65
    numberPerson : [0,0,0,0],
    priceAgeRange : [0,0,0,0],
    strAge : ['      0-2','     3-12','   13-64','over 65'],
    totalPrice : 0,
    stamp : function(){
        let age = '';
        let ageInt = 0;
        let phrase = '';

        do{
            age = prompt('enter the age of the participants (enter a blank line to exit)');
            ageInt = parseInt(age);
            if(ageInt > 0 && ageInt <=2) {
                this.numberPerson[0]++;

            }else if(ageInt > 2 && ageInt <=12) {
                this.numberPerson[1]++;

            }else if(ageInt > 12 && ageInt <=64) {
                this.numberPerson[2]++;

            }else if(ageInt > 64) {
                this.numberPerson[3]++;
            }else if (age === ''){
                break;
            }else alert('Something is wrong, you have not entered the age correctly');
        }while(age !== '')

        this.numberPerson.forEach((el, index) => {
            this.priceAgeRange[index] = (el * this.price[index]).toFixed(2);
            this.totalPrice += parseFloat(this.priceAgeRange[index]);
        });

        for(i=0; i<4; i++){
            phrase += `${this.strAge[i]}                 ${this.numberPerson[i]}           $ ${this.priceAgeRange[i]}\n`
        }
        alert (`Age Groups      tickets     Price\n\n${phrase}\nTotal Price : $ ${this.totalPrice.toFixed(2)}`);
    }
};

groupTicket.stamp();