inputDay=int(input("insert your day of birth( number ) "))
inputMonth=input("insert your month(i.e. January) ")

def calcAstrology(day,month):

  if(month=="January"):
    if(day<=19):
      zodiacalSign="Capricorn"
    elif(day>=20):
      zodiacalSign="Acquarius"

  if(month=="February"):
    if(day<=18):
      zodiacalSign="Acquarius"
    elif(day>=19):
      zodiacalSign="Pisces"

  if(month=="March"):
    if(day<=20):
      zodiacalSign="Pisces"
    elif(day>=21):
      zodiacalSign="Aries"

  if(month=="April"):
   if(day<=19):
     zodiacalSign="Aries"
   elif(day>=20):
     zodiacalSign="Taurus"

  if(month=="May"):
   if(day<=20):
     zodiacalSign="Taurus"
   elif(day>=21):
     zodiacalSign="Gemini" 

  if(month=="June"):
   if(day<=20):
     zodiacalSign="Gemini"
   elif(day>=21):
     zodiacalSign="Cancer" 

  if(month=="July"):
   if(day<=22):
     zodiacalSign="Cancer"
   elif(day>=23):
     zodiacalSign="Leo" 
  
  if(month=="August"):
   if(day<=22):
     zodiacalSign="Leo"
   elif(day>=23):
     zodiacalSign="Virgo" 

  if(month=="September"):
   if(day<=22):
     zodiacalSign="Virgo"
   elif(day>=23):
     zodiacalSign="Libra" 

  if(month=="October"):
   if(day<=22):
     zodiacalSign="Libra"
   elif(day>=23):
     zodiacalSign="Scorpio" 

  if(month=="November"):
   if(day<=22):
     zodiacalSign="Scorpio"
   elif(day>=23):
     zodiacalSign="Sagittarius"   
  
  if(month=="December"):
   if(day<=21):
     zodiacalSign="Sagittarius"
   elif(day>=22):
     zodiacalSign="Capricorns"   

  return f"your Astrological Sign is {zodiacalSign}"

print(calcAstrology(inputDay,inputMonth))




