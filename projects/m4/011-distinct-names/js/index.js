const fs = require('fs').promises;
const directory = './names-1880-2021/';

const getDistinctNames = async ()=>{
    try{
    const male = new Set();
    const female = new Set();
    const files = await fs.readdir(directory);
    
    for(fileName of files){
        const data = await fs.readFile(directory + fileName, 'utf-8');
        const names = data.split('\n')
             .map((str) => [str.replace(/\r/g, "")].join(",").split(","));
       
        names.forEach((item) =>{
                (item[1] == 'M') ? male.add(item[0]): female.add(item[0])
        });        
    }
     console.log(`ALL MALE NAMES:\n\n${[...male].sort()}\n\nALL FEMALE NAMES:\n\n${[...female].sort()}`);

    } catch(err){
    console.log(err);
    }
};

getDistinctNames();