//M1-020-discount-table

//creo un array dove inserire i dati,in questo caso i prezzi.
const originalPrice = ['4.95' , '9.95' , '14.95' , '19.95' , '24.95'];


//con il loop 'for' che grazie alle dovute formule matematiche genera le varie richieste 

for (let i = 0; i < originalPrice.length ; i++) {
  alert(` 
  Original price: ${originalPrice[i]} 
  Discount amount: ${(originalPrice[i] - ((originalPrice[i] * 60) / 100)).toFixed(2)} 
  New price (-60%): ${((originalPrice[i] * 60) / 100).toFixed(2)}  
  ` );
}


