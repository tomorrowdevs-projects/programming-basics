x=int(input('Enter the first x-coordinate :'))
y=int(input('Enter the second y-coordinate :'))
per = 0
def poli():
    per=0
    while x != '':
       print(x,y)
       per += x
       if x ==0:
            per += x
            print(f'The perimeter of that polygon is: {per}')
poli()
 
