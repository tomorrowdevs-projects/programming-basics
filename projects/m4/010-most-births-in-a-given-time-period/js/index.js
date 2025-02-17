const fs = require(`fs`);
const prompt = require(`prompt-sync`)();
const readDir = require(`./read_directory`);

readDir()
.then((files) => {

    const startInput = prompt(`This software shows you the most used baby names within a time period. Please, enter the first year of the range (from 1880 to 2021): `);
    const endInput = prompt(`Please, enter the last year of the range: `)
    const firstYear = `yob${startInput}.txt`;
    const lastYear = `yob${endInput}.txt`;
    const rangeOfTime = cutTimePeriod(files, firstYear, lastYear);
    
    return rangeOfTime;
})
.then((rangeOfTime) => {

    let maleNames = [];
    let femalesNames = [];

    rangeOfTime.forEach(file => {
        const data = fs.readFileSync(`./dataset/${file}`, {encoding:'utf8', flag:'r'});
        const fileContent = getFileContent(data);
        femalesNames.push(fileContent.filter((obj) => obj.sex === `F`));
        maleNames.push(fileContent.filter((obj) => obj.sex === `M`));
    });

    return [femalesNames.flat(), maleNames.flat()];
})
.then((array) => {

    const mostPopularFemales = array[0].sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity)).slice(0, 10);
    const mostPopularMales = array[1].sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity)).slice(0, 10);
    let femalesOutput = ``;
    let malesOutput = ``;

    mostPopularFemales.forEach((obj) => femalesOutput += `${obj.name}, used ${obj.popularity} times\n`)
    mostPopularMales.forEach((obj) => malesOutput += `${obj.name}, used ${obj.popularity} times\n`)

    console.log(`The most popular names in the selected range of time for females are: \n${femalesOutput}\nWhile for males are: \n${malesOutput}`);
})
.catch((err) => console.log(err));

const cutTimePeriod = (array, start, end) => {
    const startIndex =  array.indexOf(`${start}`);
    const endIndex = array.indexOf(`${end}`) + 1;

    return array.slice(startIndex, endIndex);
};

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

