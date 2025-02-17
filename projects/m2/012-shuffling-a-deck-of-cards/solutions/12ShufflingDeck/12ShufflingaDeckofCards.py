#A standard deck of playing cards contains 52 cards. Each card has one of four suits along with a value. The suits are normally spades, hearts, diamonds and clubs while the values are 2 through 10, Jack, Queen, King and Ace. Each playing card can be represented using two characters. The first character is the value of the card, with the values 2 through 9 being represented directly. The characters “T”, “J”, “Q”, “K” and “A” are used to represent the values 10, Jack, Queen, King and Ace respectively. The second character is used to represent the suit of the card. It is normally a lowercase letter: “s” for spades, “h” for hearts, “d” for diamonds and “c” for clubs.The following table provides several examples of cards and their two-character representations.


import random
def createDeck():
  arrString=["T","J","Q","K","A"]
  counter=2
  arr=[]
  #creating list of numb 2-9
  while counter<=9:
   arr.append(counter)
   counter=counter+1
  #adding T J Q K A by concatenating
  arr=arr+arrString
  #adding the suit
  arrMod=[]
  for x in arr:
    arrMod.append(str(x)+"h")
    arrMod.append(str(x)+"s")
    arrMod.append(str(x)+"d")
    arrMod.append(str(x)+"c")
  return arrMod

#function shuffling deck
def shuffle(arr):
  output=[]
  for x in arr:
   n=random.randint(0,52)
   output.insert(n, x)
  return output

def main():
  deck=createDeck()
  shuffledDeck=shuffle(deck)
  return deck,shuffledDeck

print(main())