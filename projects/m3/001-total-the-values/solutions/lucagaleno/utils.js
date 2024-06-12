
//let value = parseFloat(prompt('Enter the value (empty to stop enetring values): '));

function totalTheValues(value, times){
    
    if (times === 0){
        return 0.0;
    } else {
        times--
        return (value += totalTheValues(value, times));
    }; 
};

module.exports = {totalTheValues};
