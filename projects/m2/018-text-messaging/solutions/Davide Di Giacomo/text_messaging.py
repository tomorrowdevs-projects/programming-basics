#Write a program that displays the key presses needed for a message entered by the user.
#Construct a dictionary that maps from each letter or symbol to the key presses needed to generate it
#Then use the dictionary to create and display the presses needed for the user’s message.
#Ensure that your program handles both uppercase and lowercase letters.

#this function create a dictionary
def dictionary():
    keys=[]
    values=[[" "], [".", ",", "?", "!", ":"], ["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"], ["J", "K", "L"], ["M", "N", "O"], ["P", "Q", "R", "S"], ["T", "U", "V"], ["WXYZ"]]
    #create a list of keys
    for x in range(10):
        keys.append(x)
    d1=dict(zip(keys, values))
    return d1
#this function get the keys of a value in dictionary
def get_key(val):
    d1=dictionary()
    for key, value in d1.items():
         if val == value:
             return key
def presses_needed(message):
    #to read uppercase and lower case
    new_message=message.upper()
    key_presses=[]
    d1= dictionary()
    #bring each element in message
    for x in new_message:
        for y in d1.values():
            #find it in values
            if x in y:
                index=y.index(x)
                key=get_key(y)
                #throught index find how many times press the key
                for x in range(index+1):
                        key_presses.append(str(key))
    return("".join(key_presses))

message=(input("Insert you message: "))
print(presses_needed(message))