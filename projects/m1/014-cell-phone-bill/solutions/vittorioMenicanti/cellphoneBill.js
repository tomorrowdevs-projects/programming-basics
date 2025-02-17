/*A particular cell phone plan includes 50 minutes of air time and 50 
text messages for € 15.00 a month. 
Each additional minu/*A particular cell phone plan includes 50 minutes of air time and 50 
text messages for € 15.00 a month. 
Each additional minute of air time costs € 0.25, 
while additional text messages cost € 0.15 each. 
All cell phone bills include an additional charge of € 0.44 to support 911 call centers, 
and the entire bill (including the 911 charge) is subject to 5 percent sales tax. 
Write a program that reads the number of minutes and text messages used in a month from the user. 
Display the base charge, additional minutes charge (if any), 
additional text message charge (if any), the 911 fee, tax and total bill amount. 
Only display the additional minute and text message charges 
if the user incurred costs in these categories. 
Ensure that all of the charges are displayed using 2 decimal places.*/

    

const basicPlan=confirm('did you use the basic plan? press (okay) for yes, otherwise press(cancel) ');
    const basicMinute=50;
    const textMessages=50;
    const planCost=15;
    const addMinuteCost=0.25;
    const addTextMessages=0.15;
    const addCharge=0.44;
    const sumPlanCharge=planCost+addCharge;
    let billPerc=(sumPlanCharge/100)*5;
    let totalBill=(sumPlanCharge+billPerc).toFixed(2);


if (basicPlan==true) {
    
    alert(`Your basic plan is: ${basicMinute} Minutes 
    ${textMessages} Messages ${planCost}$ Monthly Plan Cost 
     911 Fee cost ${addCharge}$ 
     5% Tax ${(billPerc).toFixed(2)}$
      Total Bill ${totalBill}$
      
     Note:
        ADDITIONAL COST BEYOND BASIC PLAN:${addMinuteCost}$ for every minutes 
    ${addTextMessages}$ for every messages `);

} else if (basicPlan==false) {
    let over_min=prompt('insert amount of minutes');
    let over_mess=prompt('insert amount of messages');
    let cost_min=(over_min-50)*0.25;//cost over minutes
    let cost_mess=(over_mess-50)*0.15;//cost over messages

    let over_perc=(((sumPlanCharge+cost_min+cost_mess)/100)*5);//5 % tax
    let new_totalBill=(over_perc+sumPlanCharge+cost_min+cost_mess).toFixed(2);//final total over plan bill

    alert(`Your plan is:
    ${basicMinute} Minutes 
    ${textMessages} Messages ${planCost}$ Monthly Plan Cost 
    ${addCharge}$ 911 Fee ${(billPerc).toFixed(2)}$ 5% Tax 
    ${totalBill}$ Total Bill  ADDITIONAL COST BEYOND BASIC PLAN:
    ${over_min-50} over minutes 
    ${over_mess-50} over messages ${cost_min}$ total cost over minutes  
    ${cost_mess} total cost over messages 
    5%-Tax:${(over_perc).toFixed(2)}$ 
    ${new_totalBill}new total bill`);
}