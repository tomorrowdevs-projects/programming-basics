note=input("insert a note (i.e. C4): ")

def calcFrequency(note):

  letter=note[0]
  number=int(note[1])

  if(letter=="C"):
    frequency=261.33/ 2**(4 - number)
  elif(letter=="D"):
     frequency=293.66/ 2**(4 - number)
  elif(letter=="E"):
     frequency+=329.63/ 2**(4 - number)
  elif(letter=="F"):
     frequency+=349.23/ 2**(4 - number)
  elif(letter=="G"):
     frequency+=392.00/ 2**(4 - number)
  elif(letter=="A"):
     frequency+=440.00/ 2**(4 - number)
  elif(letter=="B"):
     frequency+=493.88/ 2**(4 - number)
  
  return f"Frequency of your note is {frequency} "

print(calcFrequency(note))