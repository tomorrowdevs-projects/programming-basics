function generatePricesList( prices, discount ){
    const pricesList = [];

    for( i = 0; i < prices.length; i++){
        const originalPrice = prices[i];
        const discountedPrice = ( originalPrice * discount ) / 100;
        const discountAmount = originalPrice - discountedPrice;
        pricesList.push( [originalPrice, discountAmount, discountedPrice] );
    }

    return pricesList;
}

function centerTableText( text, width ){

    if( !isNaN(text) ){
        text = text.toFixed(2);

        text = String(text);
    }

    const safeTextArea = width - 2; // To have at least a space to the left and one to the right

    if( text.length > safeTextArea ){

        const threeDots = '...';
        text = text.substring(0, safeTextArea - threeDots.length);
        text += threeDots;
    }
 
    const whiteSpaces = (width - text.length) / 2;
    let whiteSpacesLeft = whiteSpaces;
    let whiteSpacesRight = whiteSpaces;

    if( whiteSpaces % 2 !== 0 ){
        whiteSpacesLeft = Math.floor(whiteSpaces);
        whiteSpacesRight = Math.ceil(whiteSpaces);
    }

    let centeredText = text.padStart(text.length + whiteSpacesLeft, ' ');
    centeredText = centeredText.padEnd(centeredText.length + whiteSpacesRight, ' ');

    return centeredText;
}

function generatePricesTable( titles, list, columnsWidth, divider ){
    let pricesTable = divider;
    let pricesTableRows = '';
    let pricesTableHead = '';

    const columnsTextWidth = columnsWidth - (divider.length * 2);

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];

        const centeredTitle = centerTableText( title, columnsTextWidth );

        pricesTableHead += centeredTitle;
        pricesTableHead += divider;
    }
    pricesTable += pricesTableHead;

    for (let i = 0; i < list.length; i++) {

        let pricesTableRow =  '\n' + divider;

        for (let j = 0; j < list[i].length; j++) {

            const text = list[i][j];
            const centeredText = centerTableText( text, columnsTextWidth );
                
            pricesTableRow += centeredText;
            pricesTableRow += divider;
        }

        pricesTableRows += pricesTableRow;
    }

    pricesTable += pricesTableRows;

    return pricesTable;
}

function init(){
    const originalPrices = [4.95, 9.95, 14.95, 19.95, 24.95];
    const discountPercentage = 60;
    const pricesTitles = ['Original price ($)', 'Discount amount (%)', 'Discounted Price ($)'];
    const pricesList = generatePricesList( originalPrices, discountPercentage );
    const priceTable = generatePricesTable( pricesTitles, pricesList, 28, '|');
    console.log( priceTable );
}
init();