#DEPOSITO CONTENITORI / 002-bottle-deposits

#variabili di formattazione
currency_current = "$"
um_bottle = "PZ"
format_two_decimal = "%.2f"

deposit_under_liter = 0.10
deposit_over_liter = 0.25


#variabili per test
bottle_under_liter = 10
bottle_over_liter = 20
'''
bottle_under_liter = float(input("contenitori_sotto_litro: " ))
bottle_over_liter = float(input("contenitori_sopra_litro: " ))
'''


refund_bottle_under_liter = round(deposit_under_liter * bottle_under_liter,2)
refund_bottle_over_liter = round(deposit_over_liter * bottle_over_liter,2)
refund_bottle_total = round(refund_bottle_under_liter + refund_bottle_over_liter,2)

print()
print()

# Mostra il prezzo dei contenitori
print("Prezzo contenitori da litro:                  "+ str(format_two_decimal % round(deposit_under_liter,2))+ currency_current)
print("Prezzo contenitori superiori al litro:        "+ str(format_two_decimal % round(deposit_over_liter,2))+ currency_current)

print()

print("Numero contenitori da litro:                  " + str(bottle_under_liter)+ um_bottle )
print("Numero contenitori superiori al litro:        " + str(bottle_over_liter)+ um_bottle )

print()

print("Rimborso contenitori da litro:                " + str(format_two_decimal % refund_bottle_under_liter)+ currency_current )
print("Rimborso contenitori superiori al litro:      " + str(format_two_decimal % refund_bottle_over_liter)+ currency_current )
print("                                              -------")
print("Rimborso totale                               "+ str(format_two_decimal % refund_bottle_total)+ currency_current)
