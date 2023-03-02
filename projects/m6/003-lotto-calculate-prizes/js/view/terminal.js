///////////////////////////////////////////////////
/////////////// Print to console //////////////////
///////////////////////////////////////////////////

//all menu messages
const messages = {
    error: 'Input error, try again !\n',
    howMany: '\n                      Lotto Game!\n\nHow many tickets do you want to generate? ( from 1 to 5 )\n',
    numbers: 'How many numbers do you want to play? ( form 1 to 10 )\n',
    wheels: 'Which wheel do you want to play?\n',
    types: 'What type of bet do you want to place?\n',
    next: '\nn) Next\n\n',
    amount: 'Indicates the amount for each type of bet, from €1 to €200 for each ticket in steps of €0.5\n',
    tax: 'Total winnings already detaxed by 8%:\n',
    repeat: '\n\nDo you want to play again?\n',
};

//show messages in console
// - clear = string 'clear' to empty the console
// - key = the keys of messages to display the corresponding message
function show (clear, ...args) {
    if(clear === 'clear') console.clear();

    args.forEach(el => {
        if(el in messages) console.log(messages[el])
        else console.log(el)
    })
};

module.exports = { show }