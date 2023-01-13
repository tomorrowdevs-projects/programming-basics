const fs = require('fs').promises;
const getProportion = require('./functions').getProportion;
const dataset = 'dataset.txt'

  fs.readFile(dataset, "utf-8")
    .then((data) => {
      getProportion(data);
    }) .catch((err) => console.log(err));