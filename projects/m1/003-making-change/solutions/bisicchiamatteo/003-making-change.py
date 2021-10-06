
resto= int(input('inserisci il valore in centesimi del resto'))
contacinquanta=0
contaventi=0
contadieci=0
contacinque=0
contadue=0
contauno=0
while resto > 50 :
    resto=resto-50
    contacinquanta= contacinquanta+1
while resto >20:
    resto=resto-20
    contaventi=contaventi+1
while resto >10:
    resto=resto-10
    contadieci=contadieci+1
while resto >5:
    resto=resto-5
    contacinque=contacinque+1
while resto >2:
    resto=resto-2
    contacinque=contadue+1
if resto == 1:
    contauno=1
print( f"le monete da restituire sono:\n 50 centesimi " + str(contacinquanta) + 
"\n 20 centesimi : "+ str(contaventi)+
"\n 10 centesimi : "+ str(contadieci)+
"\n 5 centesimi : "+ str(contacinque)+
"\n 2 centesimi : "+ str(contadue)+
"\n un centesimi : "+ str(contauno))