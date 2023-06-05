#The length of a month varies from 28 to 31 days. 
#Display **28 or 29 days** for **February** so that leap years are addressed

input_month_for_reader = input(str("Hello, please type the name of the month using only alphabet"))
    
month_with_31_days = ["january", "march" ,"may" ,"july" ,"august" ,"october" ,"december"] #31 days months
    
month_with_30_days = ["november" ,"april" ,"june", "september"] #30 days months
    
month_with_28_or_29_days= ["february"]
    
if input_month_for_reader in month_with_31_days:
    print("Alright, it has 31 days")

elif input_month_for_reader in month_with_30_days:
    print("these months has 30 days! ")

elif input_month_for_reader in month_with_28_or_29_days:
    print("this one has 28 or 29 days par years!")

else:
    print("Opss something is wrong, please try again and type a valid month thanks")