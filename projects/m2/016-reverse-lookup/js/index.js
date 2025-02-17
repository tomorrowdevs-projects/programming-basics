/*Write a function named reverseLookup that finds all of the keys in a dictionary that map to a specific value. The function will 
take the dictionary and the value to search for as its only parameters. It will return a (possibly empty) list of keys from the 
dictionary that map to the provided value. Include a main program that demonstrates the reverseLookup function as part of your 
solution to this exercise. Your program should create a dictionary and then show that the reverseLookup function works correctly 
when it returns multiple keys, a single key, and no keys. Ensure that your main program only runs when the file containing your 
solution to this exercise has not been imported into another program.*/

// structure the object
function Customers(name, age, totalPurchase, numberPurchases) {
  
    this.name = name;
    this.age = age;
    this.totalPurchase = totalPurchase;
    this.numberPurchases = numberPurchases;
    
  }
  // Create a object
  function createCustomerFile() {
  
    const name = prompt("Insert your client's name");
    const age = prompt("Insert your client's age");
    const totalPurchase = prompt("Insert total purchases");
    const numberPurchases = prompt("Insert numebr purchases");
  
    const customer = new Customers(name, age, totalPurchase, numberPurchases);
  
    return customer;
    
  }
  // serch value from key
  function reverseLookup(object, value) {
  
    const result = [];
    for (let key in object) {
      if (object[key] === value && value != "" && value != " ") {
        result.push(key);
      } 
    } 
  
    if (result.length === 0) {
      return `Your value is not present.`;
    }
  
    return `Your client is listed in our database in the sections: ${result.join(", ")}`
  
  }
  
  // Main program
  
  const inputUser = createCustomerFile();
  
  const reserchValueCustomer = prompt("What data do you want to search your client for?");
  
  alert(reverseLookup(inputUser, reserchValueCustomer));