let userWidth = prompt('Insert width of room in meter: (please use . for to divide the decimals)');
let userLength  = prompt('Insert length  of room in meter: (please use . for to divide the decimals)');

const areaRoom = userLength * userWidth

const area = () => {
    
    if (typeof userWidth === 'number' && typeof userLength === 'number') {

        setTimeout(() => {
            console.log(` your width: ${userWidth} m, your width: ${userLength} m.
            The area of your room is ${areaRoom} meter2`);
        }, 2500);

    } else {
        
        console.log('Sorry u didnt insert numbers.');

    }
    
}

area();