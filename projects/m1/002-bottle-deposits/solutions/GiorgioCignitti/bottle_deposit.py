print("container liter")
liters=int((input("liters: ")))


refound=0
def calcLiters (capacityL):  
  global refound
  if(capacityL==1):
    refound=refound+0.1
    return f"$" "%0.2f" % (refound)
  elif (capacityL > 1):
    refound=refound+0.25
    return f"$" "%0.2f" % (refound)
  else: "you didn't reach 1L"

print(calcLiters(liters))

while True:
      answer = input("Do you have another containers? Enter yes or no: ") 
      if (answer=="yes"):
        liters=int((input("liters: ")))
        print(calcLiters(liters))
      else: break
      
        

      
        
      




