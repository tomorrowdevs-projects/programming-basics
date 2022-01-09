# refactoring nomi variabili e messaggi output

tabulate_label = 35
format_two_decimal = "%.2f"
bread_price_pz = 3.49
currency_money = '$'

#hard code
#bread_numebr_buy = 13
bread_numebr_buy = int(input('Bread Number pay: '))
product_description = 'PANE VECCHIO'


#solo round A due decimali arrotonda difetto/eccesso sulla terza decimale ma non stmpa se 0 --> utilizzare spec.di formato
total_pay = round(bread_numebr_buy * bread_price_pz, 2)
total_discount = round(total_pay * 0.60, 2)
total_discounted = round(total_pay - total_discount, 2)

#per le decimali 0 --> utilizzare spec.di formato
bread_numebr_buy = str(bread_numebr_buy)
total_pay = str(format_two_decimal % total_pay)
total_discount = str(format_two_decimal % total_discount)
total_discounted = str(format_two_decimal % total_discounted)

# formattazione etichetta con fantastica funzione ljust
print('-'*67)
print('Description'.ljust(tabulate_label) +'Q.ty'.ljust(10) +'Price U.'.ljust(15) + 'Price'.ljust(15))
print(product_description.ljust(29) + str(bread_numebr_buy).rjust(10) + str(bread_price_pz).rjust(15) + (total_pay + '$').rjust(12))
print('-'*67)

print(('Total to pay is:').ljust(tabulate_label) + total_pay + currency_money)
print('Total discount (60%):'.ljust(tabulate_label) + total_discount + currency_money)
print('Total discounted:'.ljust(tabulate_label) + total_discounted + currency_money)
print('-'*45)




