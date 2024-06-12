#Write a program that displays the key presses needed for a message entered by the user. Construct a dictionary that maps from each letter or symbol to the key presses needed to generate it. Then use the dictionary to create and display the presses needed for the user’s message. For example, if the user enters Hello, World! then your program should output 4433555555666110966677755531111. Ensure that your program handles both uppercase and lowercase letters. Ignore any characters that aren’t listed in the table above such as semicolons and parentheses.

#my approach is based on looping over the string searching for the value in the dictionary. NOTE I think the exercise is correct but the program is only able to print the value, given that it fires an error. I added a for loop at the end but it doesn't work



from cgitb import text


def textMessage(string):
  letters={1:[".",",","?"],2:["a","b","c"],3:["d","e","f"],4:["g","h","i"],5:["j","k","l"],6:["m","n","o"],7:["p","q","r","s"],8:["t","u","v"],9:["w","x","y","z"],0:[" "]}
  #string to lower case
  inp=string.lower()

  output=[]

  #looping over the string
  for x in inp:
    #looping over the dict
   for key,value in letters.items():
     #if the character in string is found in value
    if(x in value):
      #append to the array the key. 
      for a in value:
       output.append(key)

  return output
      
def main():
  inputUser=input("please insert your message: ")
  return textMessage(inputUser)

print(main())
    
    


       



 


 



#print(function())