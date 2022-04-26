import random

#BINGO CALLS GENERATOR
def callsGen():
  arrWords=["b","i","n","g","o"]
  output=[]
  i=0
  for x in arrWords:
   for l in range(1,16):    
     i=i+1
     convertedi=str(i)
     output.append(x+"#"+convertedi)
  return output

#BINGO CALLS SHUFFLING
def shuffler(arr):
 random.shuffle(arr)  
 return arr
 
#BINGO CARD GENERATOR
def bingoCard():
  card={
    "b":[],
    "i":[],
    "n":[],
    "g":[],
    "o":[]}
  
  for key,value in card.items():
    if(key=="b"):
      for x in range(5):
       value.append(random.randint(1,15))
    elif(key=="i"):
      for x in range(5):
       value.append(random.randint(16,30))
    elif(key=="n"):
      for x in range(5):
       value.append(random.randint(31,45))
    elif(key=="g"):
      for x in range(5):
       value.append(random.randint(46,60))
    else:
      for x in range(5):
       value.append(random.randint(61,75))
    
  return card

#CHECKING ZERO
def checkZero(arr):
  check=0
  output=True
  for x in arr:
    if(x==0):
     check+=1
  if(check == 5):
    output=True
  else:
    output=False
  return output

#CHECKING WINNER CARD
def checkingCard(card):
  output=""
  
  #horizontal check
  for key,value in card.items():
    checkHorizontal=checkZero(value)
    
  #array for vertical check 
  arr0=[]
  arr1=[]
  arr2=[]
  arr3=[]
  arr4=[]
  #arrray for diagonal check
  arr5=[]
  arr6=[]

  #filling array for vertical check 
  for key,value in card.items():
    arr0.append(value[0]) #it append value in the first row.
    arr1.append(value[1]) #it append value in the second row.
    arr2.append(value[2]) #it append value in the third row.
    arr3.append(value[3]) #it append value in the fourth row.
    arr4.append(value[4]) #it append value in the fiveth row.
    
  #diagonal check
  for key,value in card.items():
    if(key=="b"):
      arr5.append(value[0])
      arr6.append(value[4])
    elif(key=="i"):
      arr5.append(value[1])
      arr6.append(value[3])
    elif(key=="n"):
      arr5.append(value[2])
      arr6.append(value[2])
    elif(key=="g"):
      arr5.append(value[3])
      arr6.append(value[1])
    else:
      arr5.append(value[4])
      arr6.append(value[0])
  
  check0=checkZero(arr0)
  check1=checkZero(arr1)
  check2=checkZero(arr2)
  check3=checkZero(arr3)
  check4=checkZero(arr4)
  check5=checkZero(arr5)
  check6=checkZero(arr6)
   
  if(checkHorizontal==True or check0==True or check1==True or check2==True or check3==True or check4==True or check5==True or check6==True):
    output=True
  else:
    output=False
  return output

#PLAY BINGO FN
def playBingo(arr,obj):
  #var=['b#2','i#3','g#7',"n#5","o#12"]
  #obj={"b":[1,2],"i":[3,4],"n":[5,6],"g":[7,8],"o":[9,10]}
  output=[]
  #the loop create a list of sublists i.e. [["b",2],["i",21]]
  for x in arr:
   sublist=[]
   splitted=x.split("#")   
   sublist.append(splitted[0])
   sublist.append(int(splitted[1]))
   output.append(sublist)
  
  counter=0
  calls=[]
  for x in output:
    for key,value in obj.items():
      #se la chiave è uguale al primo elemento della sublista cioè la lettera fai un ciclo nel value
      if(key==x[0]):
        #per ogni numero nel value
        for number in value:
          if(x[1]==number):
           counter+=1
           #idx of the value in the array of value
           idx=value.index(number)
           value[idx]=0
          

    #quando il counter raggiunge il 25 significa che tutte i valori sono stati portati a 0. Il programma compie un loop sull'array di chiamate e quando un valore dell'array combacia con un valore dell'oggetto/cartella del bingo il contatore viene aggiornato di uno. Ovviamente se un valore dell'array di chiamate non è presente nella cartella di bingo il contatore non viene aggiornato. Per le chiamate non trovate il contatore non è aggiornato, per le chiamate trovate il contatore è aggiornato. Con questo ragionamento possiamo dire che quando il contatore raggiunge 25, tutte i valori sono stati chiamati. Il contatore quindi rimarrà 25 fino alla fine del loop nell'array di chiamate. Ad ogni iterazione quando il loop raggiunge 25 un elemento "x" verra aggiunto all'array calls. Sottraendo il num tot di chiamate (75) con la lunghezza dell'array calls otteniamo il num di chiamate che servono a completare il gioco. 
    if(counter==25):
      calls.append("x")
      
  numberOfCalls = len(calls)    
  totCalls=75-numberOfCalls    
  return totCalls

#helper function calculating average
def calcAverage(arr):
  output=0
  for x in arr:
    output=output+x 
  return output/len(arr)

#main program simulating 1000 rounds
def main():
 outputMin=""
 outputMax=""
 outputAverage=""

 arrCalls=[]
 for x in range (100):
  bingoCalls1=shuffler(callsGen())
  bingoCard1=bingoCard()
  calls=playBingo(bingoCalls1,bingoCard1)
  arrCalls.append(calls)

 outputMin=min(arrCalls)
 outputMax=max(arrCalls)
 outputAverage=calcAverage(arrCalls)
 
 return outputMin,outputMax,outputAverage

print(main())