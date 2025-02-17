let humanYear = +prompt('enter the number of human years you want to convert to dog years');
let puppyDogYear = 10.5;
let adultDogYear = 4;
let twoPuppyDogYears = puppyDogYear * 2;
let puppyDogAge;
let adultDogAge;

if (humanYear < 0 ){
    alert('Error: this value is not valid! enter a value greater than zero ');

}else if (humanYear <= 2){

     puppyDogAge = (humanYear * puppyDogYear);

     alert(`${(humanYear)} human years equals ${(puppyDogAge)} dog years `);

}else {

    adultDogAge = (twoPuppyDogYears + ((humanYear - 2) * adultDogYear));

    alert(`${humanYear} human years equals ${(adultDogAge)} dog years `);
}