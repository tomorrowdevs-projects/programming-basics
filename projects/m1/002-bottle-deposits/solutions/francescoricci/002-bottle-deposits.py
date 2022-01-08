#DEPOSITO CONTENITORI / 002-bottle-deposits
# refactoring  messaggi output

#variabili di formattazione
currency_current = "$"
um_bottle = "PZ"
format_two_decimal = "%.2f"

deposit_under_liter = 0.10
deposit_over_liter = 0.25

#variabili per test

bottle_under_liter = float(input("Container under liter: " ))
bottle_over_liter = float(input("Container over liter: " ))

refund_bottle_under_liter = round(deposit_under_liter * bottle_under_liter,2)
refund_bottle_over_liter = round(deposit_over_liter * bottle_over_liter,2)
refund_bottle_total = round(refund_bottle_under_liter + refund_bottle_over_liter,2)

# Mostra il prezzo dei contenitori
print("\nContainer price a liter: " + str(format_two_decimal % round(deposit_under_liter,2))+ currency_current)
print("Container price over a liter: " + str(format_two_decimal % round(deposit_over_liter,2))+ currency_current)

print("\nContainers number of liter: " + str(bottle_under_liter)+ um_bottle )
print("Containers number over of liter: " + str(bottle_over_liter)+ um_bottle )

print("\nContainers refaund of liter: " + str(format_two_decimal % refund_bottle_under_liter)+ currency_current )
print("Containers refaund of liter: " + str(format_two_decimal % refund_bottle_over_liter)+ currency_current )
print('-'*35)

print("Totale refaund: " + str(format_two_decimal % refund_bottle_total)+ currency_current)
