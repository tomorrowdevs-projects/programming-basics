human_years = int(input("Please insert human years "));
dog_years = 0
eachfirst_twoyears_equivalent = 10.5
if human_years <= 0 :
    print("Error! Please insert a number higher than 0")
else:
    if human_years == 1:
        dog_years = eachfirst_twoyears_equivalent
    else:
        if human_years == 2:
            dog_years = eachfirst_twoyears_equivalent * 2
        else:
            dog_years = eachfirst_twoyears_equivalent*2 + (human_years - 2)*4;
if dog_years != 0:
    print("The dog years equivalent are {}".format(dog_years));