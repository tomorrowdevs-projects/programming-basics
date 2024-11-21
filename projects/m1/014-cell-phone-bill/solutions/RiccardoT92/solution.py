'''A particular cell phone plan includes 50 minutes of air time and 50 text messages for € 15.00 a month. 
Each additional minute of air time costs € 0.25, while additional text messages cost € 0.15 each. 
All cell phone bills include an additional charge of € 0.44 to support 911 call centers, and the entire bill (including the 911 charge) is subject to 5 percent sales tax.
Write a program that reads the number of minutes and text messages used in a month from the user. Display the base charge, additional minutes charge (if any),
additional text message charge (if any), the 911 fee, tax and total bill amount. 
Only display the additional minute and text message charges if the user incurred costs in these categories. 
Ensure that all of the charges are displayed using 2 decimal places.'''





def phone_plan(minute,message):
    #count base with 5%
    
    count_total_base=0
    
    #count total with 5%
    
    count_total_sup=0
    
    difference_minute=0
    
    difference_message=0
    #count supp minute
    
    count1=0
    #count supp message
    
    count2=0
    
    base_plan = 15.44
    #case 1 + minute or + message
    if minute > 50:
        difference_minute = minute - 50
        count1= difference_minute*0.25
    
    elif message > 50:
        difference_message= message - 50
        count2= difference_message * 0.15
    #case 2 only base plan
    else:
        count_total_base=(base_plan*5)/100
        #for return 2 decimal
        return (f' {base_plan + count_total_base:.2f}')  
    
    count_total_sup=(count1+count2+base_plan)*5/100
    
    return(f'{count1+count2+base_plan+count_total_sup:.2f}')
        