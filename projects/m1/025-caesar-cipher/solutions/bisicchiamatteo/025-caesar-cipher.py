import string 

i=0
new_period=""

alphabeth= list(string.ascii_lowercase)


number= input ("inserisci il numero di codifica per il cifrario ")
new_alfabeth=alfabeth[int(number):]+alfabeth[:int(number)]
print (alphabeth)
print (new_alphabeth)
period=input("inserisci la frase che vuoi codificare :")
point = len(period)

period_list=list(period.lower())

for i in range(point) :
    letter= period_list[i]
    j=alphabeth.index(letter)
    new_period = new_period+"".join(new_alphabeth[j])
    i =i+1
    
print(new_period)      