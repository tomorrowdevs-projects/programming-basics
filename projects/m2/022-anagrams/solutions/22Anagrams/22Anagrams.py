#Two words are anagrams if they contain all of the same letters, but in a different order.For example, “evil” and “live” are anagrams because each contains one “e”, one “i”, one “l”, and one “v”.Create a program that reads two strings from the user, determines whether or not they are anagrams, and reports the result.


def checkAnagrams(string1,string2):
  char1={}
  char2={}
  for x in string1:
    char1[x]=0
  for x in string2:
    char2[x]=0
  #checking whether 2 dicts have the same set of keys. It returns a boolean
  output=char1.keys()==char2.keys()  
  return output
  

def main():
  userInput1=input("please insert first string: ")
  userInput2=input("please insert second string: ")
  print(checkAnagrams(userInput1,userInput2))

main()
