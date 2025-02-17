#Pig Latin is a language constructed by transforming English words. While the ori- gins of the language are unknown, it is mentioned in at least two documents from the nineteenth century, suggesting that it has existed for more than 100 years. The following rules are used to translate English into Pig Latin:If the word begins with a consonant (includingy), then all letters at the beginning of the word, up to the first vowel (excluding y), are removed and then added to the end of the word, followed by ay. For example, computer becomes omputercay and think becomes inkthay.If the word begins with a vowel (not including y), then way is added to the end of the word. For example, algorithm becomes algorithmway and office becomes officeway.Write a program that reads a line of text from the user. Then your program should translate the line into Pig Latin and display the result. You may assume that the string entered by the user only contains lowercase letters and spaces.


def pigLatin(string):
  consonant=["q","w","r","t","p","l","k","j","h","g","f","d","s","z","x","v","b","n","m","c"]
  arr=list(string)
  output=""
  index=0
  arrCons=[]
  if(arr[0] not in consonant):
    output=f"{string}way"
  else:
   for x in arr:
     if(x in consonant):
       index+1
       arrCons.append(x)
     else:
        break
   letters="".join(arrCons)
   output=f"{string[len(arrCons):]}{letters}ay"
  return output


def main():
  inputUser=input("please insert your strring to translate: ")
  arrInput=inputUser.split()
  output=[]
  for x in arrInput:
    output.append(pigLatin(x))
  output=" ".join(output)
  return output


print(main())