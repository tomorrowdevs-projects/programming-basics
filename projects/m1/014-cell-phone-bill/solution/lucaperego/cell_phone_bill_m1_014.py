print("Calculating a monthly Cell-Phone-Bill")

minutes_air_time_used = int(input("Monthly air time utilised - Insert minutes ---> "))
#extra_minutes_air_time_used = minutes_air_time_used - 50

number_text_messages_used = int(input("Monthly text messages utilised - Insert messages number ---> "))
#extra_number_text_messages_used = number_text_messages_used -50


base_change= 15 

add_911= 0.44

base_change_and_add_911 = (base_change + add_911)

base_taxes = ((base_change_and_add_911 * 5) / 100) 

taxes_add_911 = ((base_taxes * add_911 ) / base_change_and_add_911) 

add_911_fee =  add_911 + taxes_add_911

total_bill_base_account = base_change_and_add_911 + base_taxes


# first IF ---> this is referred to a standard phone use: without Adds, except 911 Fee, that is mandatory
# all the Code above can be used from this first IF, BUT also the other (EL)IF can use it, in particular to calculate 911 Fee
# that is the reason why, if I had put the Code above into this first IF, then I had to write it twice more for the other (EL)IF - it deals with the "SCOPE" of variables

if (minutes_air_time_used < 50 or minutes_air_time_used == 50) and (number_text_messages_used < 50 or number_text_messages_used == 50): 
    print(f"Base change: {base_change:.2f}; 911 Fee: {round(add_911_fee, 2)}; Total Taxes: {round(base_taxes, 2)}; Total Bill Account: {round(total_bill_base_account, 2)}")

elif minutes_air_time_used > 50 and number_text_messages_used > 50: 
    
    
    add_minute = 0.25

    add_message = 0.15


    extra_minutes = minutes_air_time_used - 50

    extra_messages = number_text_messages_used - 50


    extra_minutes_change = extra_minutes * 0.25

    extra_messages_change = extra_messages * 0.15


    total_bill_account_without_taxes = base_change_and_add_911 + extra_minutes_change +extra_messages_change

    taxes_for_extra_adds = (total_bill_account_without_taxes * 5)/100


    total_bill_account_for_extra_adds = total_bill_account_without_taxes + taxes_for_extra_adds

    # now we have to recalculate the 911 Fee
    # by a standars contract the 911 Fee can be calculated like:

    # taxes_add_911 = ((base_taxes * add_911 ) / base_change_and_add_911)
    # add_911_fee =  add_911 + taxes_add_911

    taxes_add_911_by_extra_adds = ((taxes_for_extra_adds * add_911)/total_bill_account_without_taxes) #in total_bill_account_without_taxes: there is also add_911
    add_911_fee_by_extra_adds = add_911 + taxes_add_911_by_extra_adds


    print(f"Base change: {round(total_bill_account_without_taxes, 2)}; Additional Minutes Change: {round(extra_minutes_change, 2)}; Additional Text Message Change:{round(extra_messages_change, 2)}; 911 Fee: {round(add_911_fee_by_extra_adds, 2)}; Total Taxes: {round(taxes_for_extra_adds, 2)}; Total Bill Account: {round(total_bill_account_for_extra_adds, 2)}")


elif (minutes_air_time_used > 50) and (number_text_messages_used <50 or number_text_messages_used == 50):
    

    add_minute = 0.25


    extra_minutes = minutes_air_time_used - 50

    extra_minutes_change = extra_minutes * 0.25


    total_bill_account_without_taxes = base_change_and_add_911 + extra_minutes_change 

    taxes_for_extra_adds = (total_bill_account_without_taxes * 5)/100


    total_bill_account_for_extra_adds = total_bill_account_without_taxes + taxes_for_extra_adds

    #911 Fee
    taxes_add_911_by_extra_adds = ((taxes_for_extra_adds * add_911)/total_bill_account_without_taxes) #in total_bill_account_without_taxes: there is also add_911
    add_911_fee_by_extra_adds = add_911 + taxes_add_911_by_extra_adds


    print(f"Base change: {round(total_bill_account_without_taxes, 2)}; Additional Minutes Change: {round(extra_minutes_change, 2)}; 911 Fee: {round(add_911_fee_by_extra_adds, 2)}; Total Taxes: {round(taxes_for_extra_adds, 2)}; Total Bill Account: {round(total_bill_account_for_extra_adds, 2)}")


elif (number_text_messages_used > 50) and (minutes_air_time_used < 50 or minutes_air_time_used == 50):
    

    add_message = 0.15


    extra_messages = number_text_messages_used - 50

    
    extra_messages_change = extra_messages * 0.15


    total_bill_account_without_taxes = base_change_and_add_911 +extra_messages_change

    taxes_for_extra_adds = (total_bill_account_without_taxes * 5)/100


    total_bill_account_for_extra_adds = total_bill_account_without_taxes + taxes_for_extra_adds

    #911 Fee
    taxes_add_911_by_extra_adds = ((taxes_for_extra_adds * add_911)/total_bill_account_without_taxes) #in total_bill_account_without_taxes: there is also add_911
    add_911_fee_by_extra_adds = add_911 + taxes_add_911_by_extra_adds

    print(f"Base change: {round(total_bill_account_without_taxes, 2)}; Additional Text Message Change:{round(extra_messages_change, 2)}; 911 Fee: {round(add_911_fee_by_extra_adds, 2)}; Total Taxes: {round(taxes_for_extra_adds, 2)}; Total Bill Account: {round(total_bill_account_for_extra_adds, 2)}")


else:


    print(f"Insert Error")