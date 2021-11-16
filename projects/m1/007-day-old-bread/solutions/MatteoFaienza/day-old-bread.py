# input user enter number of day-old loaves
oldBread=int(input('Enter the number of day-old loaves '))
oneBread=3.49
# calculation of the full and discounted price of the loaves
totalBread=oneBread*oldBread
oneBreadOld=oneBread/100*60
oneBreadOld=oneBread-oneBreadOld
totalBreadOld=oldBread*oneBreadOld
# output full and discounted price of the loaves, formatted with two decimals
print('Full price of a loaf         ',oneBread,'€')
print(f'Loaf at 60% discount          {oneBreadOld:.2f} €')
print(f'Full price of the loaves     {totalBread:.2f} €')
print(f'Total loaves at 60% discount  {totalBreadOld:.2f} €')