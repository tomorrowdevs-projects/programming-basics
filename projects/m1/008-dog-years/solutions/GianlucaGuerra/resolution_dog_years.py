#request dog yo
dog_age=float(input("Please insert your dog age: "))

if dog_age <= 2:
  print("Your dog age is: " + str(dog_age*10.5) + " yo")
elif dog_age > 2:
    print("Your dog age is: " + str(21+(dog_age-2)*4) + " yo")
elif dog_age <= 0:
    print("Error message: please insert a positive number above 0")

  
      
