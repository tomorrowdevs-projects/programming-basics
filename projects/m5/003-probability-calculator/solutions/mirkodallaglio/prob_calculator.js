//returns an array with the object's keys repeated as many times as its numeric value indicates
function objToArr (obj) {
    const array = [];

    for (ball of Object.entries(obj)) {
        for (let i=0; i < ball[1]; i++) { array.push(ball[0])}
    }
    return array
};

//check if the contents of the excepted object is inside the contents array
//at each iteration if the element exists it eliminates it from content so as to consider also double elements
//return true if is match, false if not
function checkExtraction (contents, expected) {
    const content = [...contents];

    return expected.every(ball => {
        const index = content.indexOf(ball);
        if (index !== -1) {
            content.splice(index, 1)
            return true
        } else return false
    })
}

//recursively repeats a number of experiments (num_experiment) looking for a number of elements (num_balls_draw) extracted from an object (hat)
//corresponding to those expected (expected_balls), returns the percentage representing the draws that had expected_balls inside
function experient (hat, expected_balls, num_balls_drawn, num_experiment, i=1, counter = 0) {
    if (i > num_experiment)  return (counter/num_experiment * 100).toFixed(1)
    else {
        const extract = hat.draw(num_balls_drawn);
        if (checkExtraction(extract, objToArr(expected_balls))) counter += 1;

        return experient(hat, expected_balls, num_balls_drawn, num_experiment, i+=1, counter)
    }
}

module.exports = { experient, objToArr, checkExtraction }