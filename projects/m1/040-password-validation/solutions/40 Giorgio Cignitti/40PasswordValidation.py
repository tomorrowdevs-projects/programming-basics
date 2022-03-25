#In this exercise you will write a function that determines whether or not a password is good. We will define a good password to be a one that is at least 8 characters long and contains at least one uppercase letter, at least one lowercase letter, and at least one number. Your function should return True if the password passed to it as its only parameter is good. Otherwise it should return False. Include a main program that reads a password from the user and reports whether or not it is good. Ensure that your main program only runs when your solution has not been imported into another file.


def checkPassword(password):
  text=""
  #arr to check whether the password contains a number
  arr=["0","1","2","3","4","5","6","7","8","9","0"]
  #if the password lenght is less than 8...
  if(len(password)<8):
    text="your input is not strong enough"
  else:
   for x in password:
     if(x.isupper() and x.islower()):
      text="True"
     elif(x in arr):
      text="True"
     else:
       text="False"
  return text

userInput=input("please insert your password to check: ")
print(checkPassword(userInput))