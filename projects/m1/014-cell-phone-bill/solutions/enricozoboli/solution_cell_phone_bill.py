MIN_BASE = 50
SMS_BASE = 50
BASE_CHARGE = 15.00
CONTR_911 = 0.44

tot_minutes = int(input("Insert total number of minutes: "))
tot_sms = int(input("Insert total number of sms: "))


# Check if client did use extra minute or extra sms and calculate the different amount of charges.

if tot_minutes > 50 and tot_sms > 50:
    
    extra_minutes_charge = (tot_minutes - MIN_BASE) * 0.25
    extra_sms_charge = (tot_sms - SMS_BASE) * 0.15
    total_charge_plus_extra = (BASE_CHARGE + extra_sms_charge + extra_minutes_charge +
    CONTR_911)
    taxed_charge = total_charge_plus_extra / 100 * 5
    total_bill = total_charge_plus_extra + taxed_charge
    
    print(
    f"\nBase charge €{BASE_CHARGE:.2f}\nExtra minutes charge €" 
    f"{extra_minutes_charge:.2f}\nExtra sms charge €{extra_sms_charge:.2f}\n"
    f"911 fee €{CONTR_911}\nTaxes €{taxed_charge:.2f}\n"
    f"Total bill amount's €{total_bill:.2f}\n"
    )

elif tot_minutes > 50:
    extra_minutes_charge = (tot_minutes - MIN_BASE) * 0.25
    total_charge_plus_extra = (BASE_CHARGE + extra_minutes_charge +
    CONTR_911)
    taxed_charge = total_charge_plus_extra / 100 * 5
    total_bill = total_charge_plus_extra + taxed_charge
    
    print(
    f"\nBase charge €{BASE_CHARGE:.2f}\nExtra minutes charge €" 
    f"{extra_minutes_charge:.2f}\n911 fee €{CONTR_911}\n"
    f"taxes €{taxed_charge:.2f}\n"
    f"total bill's amount €{total_bill:.2f}\n"
    )

elif tot_sms > 50:
    
    extra_sms_charge = (tot_sms - SMS_BASE) * 0.15
    total_charge_plus_extra = (BASE_CHARGE + extra_sms_charge +
    CONTR_911)
    taxed_charge = total_charge_plus_extra / 100 * 5
    total_bill = total_charge_plus_extra + taxed_charge
    
    print(
    f"\nBase charge €{BASE_CHARGE:.2f}\nExtra sms charge €{extra_sms_charge:.2f}\n"
    f"911 fee €{CONTR_911}\nTaxes €{taxed_charge:.2f}\n"
    f"Total bill's amount: {total_bill:.2f}\n"
    )

else:
    total_charge= BASE_CHARGE + CONTR_911
    taxed_charge = total_charge / 100 * 5
    total_bill = total_charge + taxed_charge
    
    print(
    f"\nBase charge €{BASE_CHARGE:.2f}\n"
    f"911 fee €{CONTR_911}\nTaxes €{taxed_charge:.2f}\n"
    f"Total bill's amount €{total_bill:.2f}\n"
    )