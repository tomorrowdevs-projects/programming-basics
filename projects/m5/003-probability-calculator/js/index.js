
class Hat {
    constructor(name, balls) {
        this.name = name || ""
        this.balls = balls || {}
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get balls() {
        return this._balls
    }

    set balls(value = {}) {
        this._balls = value
        this.contents = []
        for (let key in this.balls) {
            for (let i = 0; i < this.balls[key]; i++) {
                this.contents.push(key)
            }
        }
    }

    draw(nBalls) {
        let drawedBalls = []
        if (nBalls >= this.contents.length) {
            drawedBalls = this.contents
        } else if (nBalls === 0) {
            return drawedBalls;
        } else {
            for (let i = 0; i < nBalls; i++) {
                const index = Math.floor(Math.random() * this.contents.length)
                drawedBalls.push(this.contents[index])
            }
        }
        return drawedBalls
    }

    contentsToString() {
        const results = []
        for (let key in this.balls) {
            results.push(`${key}= ${this.balls[key]}`)
        }
        return `${this.name} = Hat(${results.join(",")})`
    }
}

const experiment = (hat, expectedBalls, numBalls, numExperiments) => {
    let newExpectedBalls = {...expectedBalls}
    let acc = 0
    for(let i = 0; i<numExperiments; i++){
        const arrayDrawns = hat.draw(numBalls)
        for(let n = 0; n<arrayDrawns.length; n++){
            const expectedKeys = Object.keys(newExpectedBalls)
            const color = arrayDrawns[n]
            if (expectedKeys.includes(color) && newExpectedBalls[color] > 0){
                newExpectedBalls[color] -= 1
            }
        }
        const arrayExpected = Object.values(newExpectedBalls)
        const sum = arrayExpected.reduce((acc,curr) => acc + curr,0)
        if (sum === 0){
            acc += 1
        }
        newExpectedBalls = {...expectedBalls}
        
    }
    return acc / numExperiments
}

const expectedBalls =
{
    red: 2,
    green: 1
}

const hat1 = new Hat()
hat1.balls = {
    red: 2,
    green: 1,
    blue:2
}


console.log(experiment(hat1, expectedBalls, 3, 5))


