print("Here you will find the Conversion from Human Years to Dog Years")

human_years = int(input("Please, insert the Human Years ---> "))

dog_years = 0


if human_years>2:
    
    dog_years = format((((human_years-2)*4)+10.5), ".2f")
    
elif (0<human_years<2) or (human_years==2):
    
    #Proportion: 10.5 : 2 = (X)dog_years : human_years ---> dog_years = (human_years * 10.5) / 2
    dog_years = format(((human_years)*10.5)/2, ".2f")
    
else:
    
    print("Error: man can't calculate a negative years or a years equal to zero!")
         
print(f"Result: [{human_years}] Human Years equals [{dog_years}] Dog Years")