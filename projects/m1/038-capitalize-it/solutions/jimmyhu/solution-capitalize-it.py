period = (input('Enter the period to capitalize: '))
def capitalized(stri):
    topupstr = list(stri)
    topupstr[0] = topupstr[0].upper()
    stri = ''.join(topupstr)
    return stri

def capitalizer(text):
    specail_sign = ['!','?','.',' ', '\'','’']
    splitted = text.split(' ')
    newtest = []    
    for i in range(0, len(splitted)):
        capit = False
        if i == 0:
            capit = True 
        elif splitted[i][0] == 'i':
            if len(splitted[i]) < 2:
                capit = True
            else:
                for sign in specail_sign:
                    if splitted[i][1] == sign:
                        capit = True 
        else:
            for sign in specail_sign[0:3]:
                if sign in splitted[i-1]:
                    capit = True 
        if capit == True:
            newtest.append(capitalized(splitted[i]))
        else:
            newtest.append(splitted[i])
    return ' '.join(newtest)

print(capitalizer(period))