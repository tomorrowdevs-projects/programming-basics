import  random   

short = 7
long = 10
MIN_ASCII   = 33
MAX_ASCII   = 126


def   randomPassword():
 
   randomLength = random.randint(short,long)
   result  = ""
   for   i in   range (randomLength):
      randomChar   = chr (random.randint(MIN_ASCII, MAX_ASCII))
      result  = result    +  randomChar
   return    result



print ("Your     random    password     is:",   randomPassword())