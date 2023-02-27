const fs = require(`fs`);
const readDir = require(`./read_directory.js`);
const { info } = require("console");

readDir()
.then((files) => {
    const babiesData = getBabiesData(files); 
    return babiesData;
})
.then((babiesData) => {
   const uniqueNames = getUniqueNames(babiesData);
   return uniqueNames;
})
.then((uniqueNames) => console.log(`The male names contained in the data set are: ${uniqueNames.maleNames.join(`, `)}\nThe female names contained in the data set are ${uniqueNames.femaleNames.join(`, `)}`))
.catch((err) => console.log(err));

const getBabiesData = filesArray => {

    const allNames = [];

    filesArray.forEach((file) => {
        const data = (fs.readFileSync(`./dataset/${file}`, {encoding:'utf8', flag:'r'}));
        text = data.replace(/\r/g, "").split(`\n`);
        allNames.push(text)
    })

    return allNames.flat();
};


const getUniqueNames = babiesData => {

    const babiesNames = {
        maleNames:  [],
        femaleNames: []
    };

    babiesData.forEach((baby) => {
        baby = baby.split(`,`);
        
        if (!babiesNames.maleNames.includes(`${baby[0]}`) && baby[1] == `M`) babiesNames.maleNames.push(baby[0]);
        if (!babiesNames.femaleNames.includes(`${baby[0]}`) && baby[1] == `F`) babiesNames.femaleNames.push(baby[0]);
    })

    return babiesNames;
};

