change= int(input('inserisci il valore in centesimi del resto'))
largetwo=divmod(change,200)
largeone= divmod(largetwo[1],100)
fifthy=divmod(largeone[1],50)
twenty=divmod(fifthy[1],20)
ten=divmod(twenty[1],10)
five=divmod(ten[1],5)
two=divmod(five[1],2)
one=divmod(two[1],1)

print( f"le monete da restituire sono:\n due euro "+ str(largetwo[0])+
"\n un euro : "+ str(largeone[0])+
"\n 50 centesimi: "+ str(fifthy[0])+
"\n 20 centesimi : "+ str(twenty[0])+
"\n 10 centesimi : "+ str(ten[0])+
"\n 5 cent : "+ str(five[0])+
"\n 2 cent : "+ str(two[0])+
"\n 1 cent : "+ str(one[0]))