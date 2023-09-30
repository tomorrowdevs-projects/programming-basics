class Hat {
    constructor(balls) {
        this.contents = [];
        for (let color in balls) {
            for (let i = 0; i < balls[color]; i++) {
                this.contents.push(color);
            }
        }
    }

    draw(numBalls) {
        const drawnBalls = [];
        for (let i = 0; i < numBalls; i++) {
            if (this.contents.length === 0) break;

            const index = Math.floor(Math.random() * this.contents.length);
            drawnBalls.push(this.contents.splice(index, 1)[0]);
        }
        return drawnBalls;
    }
}

function countBalls(drawnBalls) {
    const ballCount = {};
    for (let ball of drawnBalls) {
        ballCount[ball] = (ballCount[ball] || 0) + 1;
    }
    return ballCount;
}

function experiment(hat, expected_balls, num_balls_drawn, num_experiments) {
    let successfulDraws = 0;

    const originalContents = [...hat.contents]; // Salviamo le palline originali

    for (let i = 0; i < num_experiments; i++) {
        const drawnBalls = hat.draw(num_balls_drawn);
        const ballCount = countBalls(drawnBalls);

        let isSuccess = true;
        for (let [color, count] of Object.entries(expected_balls)) {
            if (!ballCount[color] || ballCount[color] < count) {
                isSuccess = false;
                break;
            }
        }

        if (isSuccess) successfulDraws++;

        hat.contents = [...originalContents]; // Ricarichiamo le palline originali nel cappello dopo ogni esperimento
    }

    return successfulDraws / num_experiments;
}


module.exports = { Hat, experiment };
