#drink container with less or equal to 1 lit. will receive back 0.10$
#drink container with more than 1 lit. will receive back 0.25$
#How many bottle of liter do you have?
print('How many bottles do you want recycle? Please read the following instractions.')
little_bottle=input('Please enter the number of bottles less or equal to 1 lt.: ')
big_bottle=input('Please enter the number of bottles bigger than 1 lt.: ')
little_bottle=float(little_bottle)
big_bottle=float(big_bottle)
d=float(little_bottle*0.10 + big_bottle*0.25)
print('Thank you, you will receive:', d,'$ back')