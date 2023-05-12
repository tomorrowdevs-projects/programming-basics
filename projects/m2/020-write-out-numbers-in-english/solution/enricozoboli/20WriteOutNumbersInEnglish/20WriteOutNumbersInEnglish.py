#While the popularity of cheques as a payment method has diminished in recent years, some companies still issue them to pay employees or vendors. The amount being paid normally appears on a cheque twice, with one occurrence written using digits, and the other occurrence written using English words.

#Repeating the amount in two different forms makes it much more difficult for an unscrupulous employee or vendor to modify the amount on the cheque before depositing it. In this exercise, your task is to create a function that takes an integer between 0 and 999 as its only parameter, and returns a string containing the English words for that number.

#For example, if the parameter to the function is 142 then your function should return “one hundred forty two”.

#Use one or more dictionaries to implement your solution rather than large if/elif/else constructs. Include a main program that reads an integer from the user and displays its value in English words.


def writeNumber(inp):
  dict1={1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine", 10:"ten", 11:"eleven", 12:"twelve",13 :"thirteen",14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen", }

  dict1str={"1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine", "10":"ten", "11":"eleven", "12":"twelve","13" :"thirteen","14":"fourteen", "15":"fifteen", "16":"sixteen", "17":"seventeen", "18":"eighteen", "19":"nineteen", }

  dict2={"2":"twenty", "3":"thirty", "4":"forty", "5":"fifty", "6":"sixty", "7":"seventy", "8":"eighty", "9":"ninety" }

  output=[]
  #input less than 20
  if(inp<20):
    for key,value in dict1.items():
      if(inp==key):
        output.append(value)
        

  #input larger than 20
  if(inp>=20 and inp<=99):
    string= str(inp)
    #decimal
    for key,value in dict2.items():
      if(string[0]==key):
        output.append(value)

    #unit
    #if the unit is 0 30,40,50
    if(string[1]==0):
      return 
    else:
     for key, value in dict1str.items():
       if(string[1]==key):
        output.append(value)
  #input larger than 99
  if(inp>99 and inp<999):
    string= str(inp)
    #centinaia
    for key,value in dict1str.items():
      if (string[0]==key):
        output.append(value)
        output.append("hundred")
       

    #decine da 10 20
    if(string[1]=="1" ):
      arr=[]
      arr.append(string[1])
      arr.append(string[2])    
      number=int("".join(arr))
      for key,value in dict1.items():
        if(number==key):
          output.append(value)
      
    #decine da 1 a 10
    elif(string[1]=="0"):
      for key, value in dict1str.items():
       if(string[2]==key):
        output.append(value)

    #decine maggiori di 20
    else:
       for key, value in dict2.items():
        if(string[1]==key):
         output.append(value)
       for key, value in dict1str.items():
        if(string[2]==key):
         output.append(value)
  return ' '.join(output)


def main():
  userInput=int(input("please enter your input: "))
  print(writeNumber(userInput))

main()


   
  
    

    


  
      

      
    
    