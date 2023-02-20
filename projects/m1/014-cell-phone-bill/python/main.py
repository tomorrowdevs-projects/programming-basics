minute = int(input("Insert the number of minute spend at cell this month: "))
sms = int(input("Insert the number of sms do you send this month: "))

basic_sms = 50
basic_minute = 50
additional_sms = sms - basic_sms
additional_minute = minute - basic_minute

#Determine if we have an additional fee or not

if sms > basic_sms:
    total_sms_fee = additional_sms * 0.15 
else:
    total_sms_fee = basic_sms

if minute > basic_minute:
    total_minute_fee = additional_minute * 0.25 
else:
    total_minute_fee = basic_minute
    
    
# the case where we don't have fee, we display the basic fee + 911 and total taxes

if sms <= basic_sms and minute <= basic_minute: #flat case
    print(f"You need to pay 15$ + 0.44$ for 911 tax and 5% of taxes")
    total_fee_no_taxes = (15 + 0.44)
    total_fee_plus_taxes = ((total_fee_no_taxes/100)*5) + total_fee_no_taxes
    print(f"The total is {total_fee_plus_taxes:.2f}$")
    
# the case where i've only sms additional fee

elif sms > basic_sms and minute < basic_minute:
    print(f"You need to pay 15$ + 0.44$ for 911 tax+ {total_sms_fee}$ for extra sms and 5% of taxes ")
    total_fee_no_taxes = (total_sms_fee + 0.44 +15)
    total_fee_plus_taxes = ((total_fee_no_taxes/100)*5) + total_fee_no_taxes
    print(f"The total is {total_fee_plus_taxes:.2f}$")
    

# the case where i've only telephone additional fee

elif sms < basic_sms and minute > basic_minute:
    print(f"You need to pay 15$ + 0.44$ for 911 tax+ {total_minute_fee:.2f}$ for extra minutes and 5% of taxes ")
    total_fee_no_taxes = (total_minute_fee + 0.44 +15)
    total_fee_plus_taxes = ((total_fee_no_taxes/100)*5) + total_fee_no_taxes
    print(f"The total is {total_fee_plus_taxes:.2f}$")

# the case where i've  telephone  and sms additional fee


elif sms > basic_sms and minute > basic_minute:
    print(f"You need to pay 15$ + 0.44$ for 911 tax + {total_minute_fee:.2f}$ for extra minute + {total_sms_fee:.2f}$ and 5% of taxes ")
    total_fee_no_taxes = (total_minute_fee + total_sms_fee + 0.44 + 15)
    total_fee_plus_taxes = ((total_fee_no_taxes / 100) * 5) + total_fee_no_taxes
    print(f"The total is {total_fee_plus_taxes:.2f}$")