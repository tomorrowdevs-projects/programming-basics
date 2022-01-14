sms=int(input("Enter number of sms for this month: "))
minute=int(input("Enter number of minute for this month: "))

month_cost=15
surplus_sms_cost=0
surplus_minute_cost=0

if sms>50:
    surplus_sms_cost=(sms-50)*0.15
    print("Surplus SMS Cost is: {}".format(surplus_sms_cost))
else: print("No Surplus SMS cost")

if minute>50:
    surplus_minute_cost=(minute-50)*0.25
    print("Surplus MINUE Cost is: {}".format(surplus_minute_cost))   
else: print("No Surplus MINUTE cost")

total_cost=(month_cost+surplus_minute_cost+surplus_sms_cost)*1.05

print("Total cost is: {} ".format(total_cost))

