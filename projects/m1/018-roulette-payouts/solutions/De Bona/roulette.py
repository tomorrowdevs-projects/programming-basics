from random import randrange
def  play(number):
    red =[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
    if number in red:
          print ("pay red ")
    else:
          print("pay black ")
    if number in range (1, 18):
          print ("pay from 1 to 18 ")
    else:
          print ("pay from 19 to 36 ")
    if  number %2==0:
          print ("pay even ")
    else:
          print ("pay odd")

number = int(randrange(0, 37))
print("the spin is:", number)
play(number)



