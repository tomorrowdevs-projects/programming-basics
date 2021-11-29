                ##acqisisto quantità delle due categorie
cat1= int(input ("Numero dei contenitori <= 1 Litro: ")) 
cat2= int(input ("Numero dei contenitori > 1 Litro: "))

                ##calcolo rimborso per le due categorie
totcat1=cat1*0.10
totcat2=cat2*0.25

                ##visualizzo risultati
print ("Il rimborso per la categoria 1 è di {} $" .format(totcat1))
print ("Il rimborso per la categoria 2 è di {} $" .format(totcat2))
print ("Il rimborso totale è di {} $" .format(totcat1+totcat2))