chessPosition=input("insert a chess position (i.e. a6): ")

def checkColors(position):
  firstGroup="aceg";
  secondGroup="bdfh";
  letter=position[0]
  number=int(position[1])
  if(letter in firstGroup and number%2==0):
    color="white"
  elif (letter in firstGroup and number%2==1):
    color="black"
  elif (letter in secondGroup and number%2==0):
    color="black"
  else:
    color="white"
    
  return color

print(checkColors(chessPosition))