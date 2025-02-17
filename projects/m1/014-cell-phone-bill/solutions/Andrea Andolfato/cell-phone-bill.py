
extra_minutes = int(input("Please insert extra minutes"))
extra_text_messages = int(input("Please insert extra text messages"))
cell_phone_plan = 15

if extra_minutes > 0 and extra_text_messages == 0:
        bill_one = cell_phone_plan + 0.44 + (extra_minutes * 0.25)
        print("This is total charge: ", bill_one)
        bill_one_tax = (bill_one / 100) * 5
        print("This is total bill with 5% tax: ", (bill_one + bill_one_tax))

elif extra_minutes == 0 and extra_text_messages > 0:
        bill_two = cell_phone_plan + 0.44 + (extra_minutes * 0.15)
        print("This is total charge: ", bill_two)
        bill_two_tax = (bill_two / 100) * 5
        print("This is total bill with 5% tax: ", (bill_two + bill_two_tax))

elif extra_minutes > 0 and extra_text_messages > 0:
    bill_three = cell_phone_plan + 0.44 + (extra_minutes * 0.25) + (extra_minutes * 0.15)
    print("This is total charge: ", bill_three)
    bill_three_tax = (bill_three / 100) * 5
    print("This is total bill with 5% tax: ", (bill_three + bill_three_tax))

else:
    bill_four = (cell_phone_plan + 0.44) + ((cell_phone_plan / 100) * 5)
    print("This is total charge: ", bill_four)