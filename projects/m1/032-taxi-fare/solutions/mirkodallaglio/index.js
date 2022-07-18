let km = prompt('Enter the distance travelled (in kilometers)');

function taxiFare (km){
    return (km /0.14 * 0.25 + 4).toFixed(2)
}

if(/^([0-9]+[.])?[0-9][0-9]$/.test(parseFloat(km).toFixed(2))) alert(`Taxi fares = € ${taxiFare(km)}`);
else alert('Error, You have to write the number of km traveled !');