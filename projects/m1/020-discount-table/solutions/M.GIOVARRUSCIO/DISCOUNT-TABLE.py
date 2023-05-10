"""
A particular retailer is having a 60 percent off sale on a variety of discontinued products.
The retailer would like to help its customers determine the reduced price of the merchandise
by having a printed discount table on the shelf that shows the original prices and the prices
after the discount has been applied.

Write a program that uses a loop to generate this table, showing the original price,
the discount amount, and the new price for purchases of $4.95, $9.95, $14.95, $19.95 and $24.95.
Ensure that the discount amounts and the new prices are rounded to 2 decimal places when
they are displayed.

"""
#i prezzi sono memorizzati in una lista
prezzo=[4.95,9.95,14.95,19.95,24.95]

sconto = float(input("Inserisci sconto: "))
#intestazione tabella
print('{0:^20}{1:^20}{2:^20}'.format("prezzo originale","importo scontato","nuovo prezzo"))
#ciclo for sulla lista per stampare la tabella
for i in prezzo:
    a=i*(1-(sconto/100))
    b=i-a
    print('{0:^20.2f}{1:^20.2f}{2:^20.2f}'.format(i,a,b))