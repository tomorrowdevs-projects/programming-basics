
#program that displays the key presses needed for a message entered by the user

text_letters = {
'1':['.',',','?','!',':'],
'2':['a','b','c'],
'3':['d','e','f'],
'4':['g','h','i'],
'5':['j','k','l'],
'6':['m','n','o'],
'7':['p','q','r','s'],
'8':['t','u','v'],
'9':['w','x','y','z'],
'0':[' ']
}

text = list(input("Please input a text so I can show you how to type it on your phone:").lower())


for i in text:                                      #all the elements(i) in the list 'text'
    for k,v in text_letters.items():                #all the keys and the values in the dictionary 'text_letters'
        if i in v:                                  #if elements(i) are in the values(v)
            for a in range(v.index(i)+1):           #all the elements(a) in the position inside the values group plus 1 because the programm reads the 0
                print(k, end='')                    #we need to print the keys