# 003-making-change

# Consideriamo il software che gira su una macchina per il self-checkout.
# Un compito che deve essere in grado di eseguire è determinare quanto
# resto fornire quando l'acquirente paga un acquisto in contanti.
# Scrivete un programma che inizia leggendo un numero di centesimi
# dall'utente come un intero.
# Poi il vostro programma dovrebbe calcolare e mostrare le denominazioni
# delle monete che dovrebbero essere usate per dare quella quantità di
# resto al cliente.
# Il resto dovrebbe essere dato usando il minor numero possibile di monete.
# Supponiamo che la macchina sia caricata con penny, nichel, dimes, quarters,
# loonies e toonies.



penny_value = 1
nichel_value = 5
dimes_value = 10
quarters_value = 25
loonies_value = 100
toonies_value = 200

resto = 706
print('Resto: '+  str(resto))

print()


print (str(resto // toonies_value)+ ' toonies')
resto = resto  % toonies_value
print (str(resto // loonies_value)+ ' loonies')
resto = resto  % loonies_value
print (str(resto // quarters_value)+ ' quarter')
resto = resto  % quarters_value
print (str(resto // dimes_value)+ ' dimes')
resto = resto  % dimes_value
print (str(resto // nichel_value)+ ' nichel')
resto = resto  % nichel_value

#caso base
print (str(resto // penny_value)+ ' penny')













