function taxiFare(kilometers) {
    let baseFare = 4.00;
    let plusFare = 0.25;
    plusFare = (kilometers / 0.14 ) * 0.25;
    let totalFare = (plusFare + baseFare).toFixed(2);
    return alert("The total fare is: € " + totalFare); 
    }
         
    let onlyNumbers = /^[0-9\.]+$/;
    let distance = prompt("Enter the distance travelled in kilometers");
    
    if (!onlyNumbers.test(distance)) {
        alert("Invalid Entry!");
    } else {
        taxiFare(distance);
    }