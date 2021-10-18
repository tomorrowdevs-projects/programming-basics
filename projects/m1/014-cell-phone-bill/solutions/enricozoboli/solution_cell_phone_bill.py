MIN_BASE = 50
SMS_BASE = 50
BASE_CHARGE = 15.00
CONTR_911 = 0.44

tot_minutes = int(input("Insert total number of minutes: "))
tot_sms = int(input("Insert total number of sms: "))

print(f"\nBase charge {BASE_CHARGE:.2f}")

if tot_minutes > 50:
    extra_minutes_charge = (tot_minutes - MIN_BASE) * 0.25
    print(f"Extra minutes charge €{extra_minutes_charge:.2f}")
else:
    extra_minutes_charge = 0

if tot_sms > 50:
    extra_sms_charge = (tot_sms - SMS_BASE) * 0.15
    print(f"Extra sms charge €{extra_sms_charge:.2f}")
else:
    extra_sms_charge = 0

tax_amount = (BASE_CHARGE + CONTR_911 + extra_minutes_charge
            + extra_sms_charge) / 100 * 5
total_bill = (BASE_CHARGE + extra_minutes_charge + extra_sms_charge +
            CONTR_911 + tax_amount)

print(f"911 fee €{CONTR_911:.2f}\nTax's amount €{tax_amount:.2f}\n"
f"Total bill €{total_bill:.2f}")
