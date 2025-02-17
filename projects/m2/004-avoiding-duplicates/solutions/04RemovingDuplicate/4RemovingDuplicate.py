#In this exercise, you will create a program that reads words from the user until the user enters a blank line. After the user enters a blank line your program should dis- play each word entered by the user exactly once. The words should be displayed in the same order that they were first entered.

#function converting array to one set
def removerDuplicate(arr):
  uniqueValue=set(arr)
  return uniqueValue

def main():
  arr=[]
  while True:
    userInput=input("pelase insert a word: ")
    if(userInput==""):
      break
    else:
      arr.append(userInput)
  
  return removerDuplicate(arr)

print(main())
