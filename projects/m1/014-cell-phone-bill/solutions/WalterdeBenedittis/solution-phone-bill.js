let insMin;
    let insMsg;
    let addMin;
    let addMsg;
    let salesTax;
    let totalCost;
    
    insMin = prompt("Insert the number of minutes of air time you used in a month");
    insMsg = prompt("Insert the number of minutes of messages you used in a month");

    if (insMin > 50){
        addMin = ((insMin - 50) * 0.25).toFixed(2);
    } else {
        addMin = 0;
    }

    if (insMsg > 50){
        addMsg = ((insMsg- 50)* 0.15).toFixed(2);
    }   else {
        addMsg = 0
    }

    salesTax = ((((15 + +addMin + +addMsg) +0.44 ) * 5)/100).toFixed(2);

    totalCost = (15+ +addMin + +addMsg +0.44 + +salesTax).toFixed(2);

    if ((insMin <= 50 && insMsg <= 50)){
        alert("CELL PHONE BILL: \nBase Cost: €15.00 \n911 Support: €0.44 \n5% Tax: " +salesTax+ "\nTotal Costs: € " +totalCost);
    } else if (insMin > 50 && insMsg <= 50){
        alert("CELL PHONE BILL: \nBase Cost: €15.00 \n Addictional Minutes: € "+addMin+ "\n911 Support: €0.44 \n5% Tax: " +salesTax+ "\nTotal Costs: € " +totalCost);
    } else if (insMin <= 50 && insMsg > 50){
        alert("CELL PHONE BILL: \nBase Cost: €15.00 \n Addictional Messages: € "+addMsg+ "\n911 Support: €0.44 \n5% Tax: " +salesTax+ "\nTotal Costs: € " +totalCost);
    } else {
        alert("CELL PHONE BILL: \nBase Cost: €15.00  \n Addictional Minutes: € "+addMin+ "\n Addictional Messages: € "+addMsg+"\n911 Support: €0.44 \n5% Tax: " +salesTax+ "\nTotal Costs: € " +totalCost);
    }
