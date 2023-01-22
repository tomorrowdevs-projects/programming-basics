print("Calculating the Refund after the returning of empty Bottles to Drink Containers")

number_bottles_greater_than_1L = int(input("Insert the number of Bottles with Capacity greater than 1 Liter - Insert 0 if NONE ---> "))

number_bottles_of_1_L_or_littler = int(input("Insert the number of Bottles with Capacity of 1 Liter or less than 1 Liter - Inserto 0 if NONE ---> "))


refund_for_number_bottles_greater_than_1L = (format(((number_bottles_greater_than_1L) * 0.25), '.2f'))

refund_for_number_bottles_of_1_L_or_littler = (format(((number_bottles_of_1_L_or_littler) * 0.10), '.2f'))


print(f"Refund for the bottles greater than 1 Liter: {refund_for_number_bottles_greater_than_1L} $")

print(f"Refund for the bottles of 1 Liter: {refund_for_number_bottles_of_1_L_or_littler} $")


full_refund =  format((float(refund_for_number_bottles_greater_than_1L) + float(refund_for_number_bottles_of_1_L_or_littler)), '.2f')

print(f"For all the delivered bottles - Full Refund: {full_refund} $")