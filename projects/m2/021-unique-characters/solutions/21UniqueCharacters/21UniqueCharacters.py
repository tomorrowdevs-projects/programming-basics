#Create a program that determines and displays the number of unique characters in a string entered by the user.For example, Hello, World! has 10 unique characters while zzz has only one unique character.Use a dictionary or set to solve this problem.

def counterFrequency(string):
  char={}
  arr=[]
  #a dict is built with all the characters in the string by looping over it. key(char), value=0
  for x in string:
    char[x]=0
  #looping over a string
  for x in string:
    for key,value in char.items():
     if(x==key):
       arr.append(key)       
  #giving an array/set with unique value. the length of it will give us the number of unique characters
  output=len(set(arr))

  return output,char
  
def main():
  userInput=input("please insert a string: ")
  print(counterFrequency(userInput))

main()

