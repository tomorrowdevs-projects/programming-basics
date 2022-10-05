//cellphone-bill-014

let basicMinute=50;
let textMessages=50;
let planCost=15;
let addMinuteCost=0.25;
let addTextMessages=0.15;
let addCharge=0.44;
let sumPlanCharge=planCost+addCharge;
let billPerc=(sumPlanCharge/100)*5;
let totalBill=(sumPlanCharge+billPerc).toFixed(2);

const basicPlan=confirm('did you use the basic plan? (okay) for yes,(cancel) for no');


if (basicPlan==true) {
    
    alert(`Your basic plan is :\n${basicMinute} Minutes 
    Messages:${textMessages}  
    Monthly Plan Cost :${planCost}$ 
    911 Fee:${addCharge}$  
    5% Tax:${(billPerc).toFixed(2)}$  
    Total Bill:${totalBill}$   
    ADDITIONAL COST BEYOND BASIC PLAN:
    ${addMinuteCost}$ for every minutes 
    ${addTextMessages}$ for every messages `)
} else if (basicPlan==false ) {
    let over_min=prompt('insert amount of minutes');
    let over_mess=prompt('insert amount of messages');

    
    let cost_min=(over_min-50)*0.25;
    let cost_mess=(over_mess-50)*0.15;

    let over_perc=(((sumPlanCharge+cost_min+cost_mess)/100)*5);
    let new_totalBill=(over_perc+sumPlanCharge+cost_min+cost_mess).toFixed(2);
    alert(`Your plan is :
    Minutes:${basicMinute} 
    Messages:${textMessages}  
    Monthly Plan Cost:${planCost}$ 
    911 Fee:${addCharge}$  
    5% Tax :${(billPerc).toFixed(2)}$ 
    Total Bill:${totalBill}$  
    ADDITIONAL COST BEYOND BASIC PLAN:
    Over minutes:${over_min-50}  
    Over messages:${over_mess-50}  
    Total cost over minutes:${cost_min}$  
    Total cost over messages:${cost_mess}$  
    5% Tax:${(over_perc).toFixed(2)}$ 
    New Total Bill${new_totalBill}$`);
     
}
