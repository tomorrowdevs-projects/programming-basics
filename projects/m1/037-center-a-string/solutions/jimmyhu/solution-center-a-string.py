import random

string = input('Enter the string: ')
windowwidth = int(input('Enter the width of the window: '))
def stringcenter(text, width):
    if len(text) >= width:
        return text
    elif len(text) < width:
        spaces = (width - len(text))
        return spaces
print(f"{stringcenter(string,windowwidth)}  {string}")

control = []
breaker = False
while breaker == False:
    newstring = input('Enter the new string(leave blank for stop): ')
    if newstring == '':
        breaker = True
    else:
        control.append(newstring)
for element in control:
    randwitdth = random.randint(0,150)
    print(' ' * stringcenter(element,randwitdth) + element + f" new width: {randwitdth}")