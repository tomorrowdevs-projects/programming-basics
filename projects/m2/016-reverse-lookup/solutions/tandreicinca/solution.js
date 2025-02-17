//

function reverseLookup(object, value) {
    for (let key in object) {
        console.log(object[key])
        if (object[key] == value) {
            return key
        } else if (!Object.values(object).includes(value)) {
            return 'Not found'
        } else {
            continue
        }
    }
}

const car = {color: 'white', name: '500', year: '2019', power: '70cv', cilindrate: '1200', owners: '1', kilometers: '34000'}

let value = prompt ("Write what you need")

alert(reverseLookup(car, value))