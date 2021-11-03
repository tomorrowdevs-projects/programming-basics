#drink container with less or equal to 1 lit. will receive back 0.10$
#drink container with more than 1 lit. will receive back 0.25$
#How many bottle of liter do you have?
print('How many bottles do you want recycle? Please read the following instractions.')
n=input('Please enter the number of bottles less or equal to 1 lt.: ')
N=input('Please enter the number of bottles bigger than 1 lt.: ')
n=float(n)
N=float(N)
d=float(n*0.10+N*0.25)
print('Thank you, you will receive:', d,'$ back')
