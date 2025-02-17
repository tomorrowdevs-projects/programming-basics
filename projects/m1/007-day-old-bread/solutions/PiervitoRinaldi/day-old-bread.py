# Day old Bread
# Inserisci il numero di pagnotte che desideri acquistare, e scopri quanro hai speso in totale!.

nPagnotteFrescheAcquistate= int(input)  # Numero pagnotte fresco acquistate
nPagnotteVecchieAcquistate= int(input)   # Numero pagnotte vecchie acquistate

prezzoPagnotteVecchie= 3.49-((3.49*60)/100)

prezzoPagnotteFrescheAcquistate= nPagnotteFrescheAcquistate*3.49
prezzoPagnotteVecchieAcquistate= nPagnotteVecchieAcquistate*prezzoPagnotteVecchie

print('{:>15}'.format('%.2f' %(prezzoPagnotteFrescheAcquistate)),'euro = pagnotte fresche acquistate')
print('{:>15}'.format('%.2f' %(prezzoPagnotteVecchieAcquistate)),'euro = Prezzo pagnotte vecchie acquistate')
print('{:>15}'.format('%.2f' %(prezzoPagnotteFrescheAcquistate+prezzoPagnotteVecchieAcquistate)), 'euro = Prezzo totale')