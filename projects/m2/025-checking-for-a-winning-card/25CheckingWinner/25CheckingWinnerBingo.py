#A winning Bingo card contains a line of 5 numbers that have all been called.

#Players normally record the numbers that have been called by crossing them out or marking them with a Bingo dauber.

#In this exercise we will mark that a number has been called by replacing it with a 0 in the Bingo card dictionary.

#Write a function that takes a dictionary representing a Bingo card as its only parameter.

#If the card contains a line of five zeros (vertical, horizontal or diagonal) then your function should return True, indicating that the card has won.

#Otherwise the function should return False.

#Create a main program that demonstrates your function by creating several Bingo cards, displaying them, and indicating whether or not they contain a winning line.

#You should demonstrate your function with at least one card with a horizontal line, at least one card with a vertical line, at least one card with a diagonal line, and at least one card that has some numbers crossed out but does not contain a winning line.

#You will probably want to import your solution to Exercise "Create a Bingo Card" when completing this exercise.


#for this challenge we need to do 3 checks. horizontal, vertical and diagonal. The horizontal we can loop over the value of the dict checking whether each item is a zero. Vertical: I loop over the dict appending to the arrays the value[0],value[1]..corresponding to column 0,1..In this way I got one array with the values corresponding to one column. I used the same approach (filling arrays) for checking diagonal. Then I run check Zero function to check if all the items inside the arrays are 0.

#helper function to check
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

  #fillimg array for vertical check 
  for key,value in card.items():
    arr0.append(value[0]) #it append value in the first row.
    arr1.append(value[1]) #it append value in the first row.
    arr2.append(value[2]) #it append value in the first row.
    arr3.append(value[3]) #it append value in the first row.
    arr4.append(value[4]) #it append value in the first row.
    
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
    output="BiNGoo"
  else:
    output="You didn't bingo-it!" 

  return output



card1={ #horizontal
  "b":[1,2,3,4,5],
  "i":[1,2,3,4,5],
  "n":[1,2,3,4,5],
  "g":[1,2,3,4,5],
  "o":[0,0,0,0,0]}

card2={ #vertical
  "b":[0,2,3,4,5],
  "i":[0,2,3,4,5],
  "n":[0,2,3,4,5],
  "g":[0,2,3,4,5],
  "o":[0,2,3,4,5]}

card3={ #diagonal
  "b":[0,2,3,4,0],
  "i":[1,0,3,0,5],
  "n":[1,2,0,4,5],
  "g":[1,0,3,0,5],
  "o":[0,2,3,4,0]}

card4={ #casual
  "b":[1,2,3,4,5],
  "i":[1,2,3,4,5],
  "n":[1,2,0,4,5],
  "g":[1,2,3,4,5],
  "o":[1,2,3,4,5]}


print(checkingCard(card1))
print(checkingCard(card2))
print(checkingCard(card3))
print(checkingCard(card4))






