#num 1 disparo

#function declaration to count parityBits
def bitsCounter(bitSeq):
  bit1=bitSeq.count("1")
  sentence=0
  if(bit1%2==1):
    sentence="1"
    return sentence
  else:
     sentence="0"
     return sentence

#variable declaration to store the 8bit sequences inserted by the user in one list
bitStrings = []

#while loop to fill the list with 8 bit sequence inserted by the user
while True:
    bit8 = input("insert a group of string (blank line to): ")
    if bit8 and len(bit8)==8:
        bitStrings.append(bit8)
    else:
        print("please enter an 8-bit sequence")
        break


#looping over the list and for each item a function is called 
for number in bitStrings:
  print(bitsCounter(number))







