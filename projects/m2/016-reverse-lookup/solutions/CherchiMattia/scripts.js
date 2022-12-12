
let user = {
    name: 'Mattia',
    surname: 'Cherchi',
    age: 28,
    id: 12,
    isAdmin: true,
}

const reverseLookup = (object, value) => {



    for (let key in object) {

        if (object[key] === value) {

            return console.log(key)

        }
    }

}

reverseLookup(user, 'Mattia');
reverseLookup(user, true);
reverseLookup(user, 28);
reverseLookup(user, 12);