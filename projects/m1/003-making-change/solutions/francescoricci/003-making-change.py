# 003-making-change
# refactoring  nomi variabili

penny_value = 1
nichel_value = 5
dimes_value = 10
quarters_value = 25
loonies_value = 100
toonies_value = 200

#change = 706 #remove comment hard coded by test
change = int(input('Insert total change  '))
print(change)

print (str(change // toonies_value) + ' toonies')
change = change % toonies_value
print (str(change // loonies_value) + ' loonies')
change = change % loonies_value
print (str(change // quarters_value) + ' quarter')
change = change % quarters_value
print (str(change // dimes_value) + ' dimes')
change = change % dimes_value
print (str(change // nichel_value) + ' nichel')
change = change % nichel_value

#caso base
print (str(change // penny_value) + ' penny')













'''



'''









