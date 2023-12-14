let userWidth = Number(prompt('Insert width of room in meter: (please use . for to divide the decimals)'));
let userLength  = Number(prompt('Insert length  of room in meter: (please use . for to divide the decimals)'));

const areaRoom = userLength * userWidth

const area = () => {

    setTimeout(() => {
        console.log(` your width: ${userWidth} m, your width: ${userLength} m.
        The area of your room is ${areaRoom} meter2`);
    }, 2500);
}

area();