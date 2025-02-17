const fs = require(`fs`);
const readDir = require(`./directory_read`);
const prompt = require(`prompt-sync`)();
const fileRead = require(`./file_read`)

readDir()
.then((files) => {
    const file = prompt(`This folder contains data set about baby names. Choose one of the files to show it's most popular names:\n ${files.join(` - `)}: `)
    return file;
})
.then((file) => {
    return new Promise ((resolve, reject) => {
        fs.readFile (`./files/${file}`, 'utf-8', (err, data) => {

            if (err) reject (`ERROR: The requested file does not exist!`);
            resolve (data);
        });
    });
})
.then((data) => showPopularNames(getPopularNames(getFileContent(data))))
.catch((err) => console.log(err));

const data = fs.readFileSync(`./files/yob1880.txt`, 'utf8');

const getFileContent = text => {

    const dataSet = [];
    text = text.replace(/\r/g, "").split(`\n`);
    
    text.forEach((name) => {

        name = name.split(`,`);

        const baby = {
            name: name[0],
            sex: name[1],
            popularity: +name[2]
        };

        dataSet.push(baby);
    });

    return dataSet;
};

const getPopularNames = array => {

    const females = array.filter((obj) => obj.sex === `F`).sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity));
    const males = array.filter((obj) => obj.sex === `M`).sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity));
    const babies = [males.slice(0, 10), females.slice(0, 10)];

    return babies;
};


const showPopularNames = array => {

    let femalesOutput = ``;
    let malesOutput = ``;

    array[0].forEach((obj) => malesOutput += `${obj.name}, used ${obj.popularity} times\n`)
    array[1].forEach((obj) => femalesOutput += `${obj.name}, used ${obj.popularity} times\n`)

    console.log(`The most popular names in the selected year for females are: \n${femalesOutput}\nWhile for males are: \n${malesOutput}`);
};

