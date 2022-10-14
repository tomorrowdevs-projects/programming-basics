def to_cardinal_numerals(s):
    #set the variable that will store the result, the dict which the program will use to convert roman to cardinal numbers
    #make the string uppercase
    number = 0
    roman_num = {1000:'M',500:'D',100:'C',50:'L',10:'X',5:'V',1:'I'}
    s = s.upper()
    #check if the lenght of s is 1 character or more.
    if len(s)==1:
        #check to which value is equal to s and add its key to the result variable
        #empty the s string
        for k,v in roman_num.items():
            if s[0] == v:
                number += k
                s = s.replace(s[0],'')
    else:
        x = 0
        y = 0
        #i created the first loop otherwise the program will give an error that s[] is out of index
        for i in s[0:2]:
            #check to which value is equal to the 1st and 2nd character in s and add the corresponding key to result variable 
            for k,v in roman_num.items():
                if s[0] == v:
                    x = k
                if s[1] == v:
                    y = k
        #check if the 1st converted value is smaller of the 2nd one or not
        if x<k:
            number += y-x
        else:
            number += x+y
        #empty the fist and second character in string with the count parameter set to 1
        s = s.replace(s[1], '', 1)
        s = s.replace(s[0], '', 1)
    #check if there are remaining characters in the string.
    if len(s)>=1:
        return to_cardinal_numerals(s) + number
    else:
        return number

if __name__=='__main__':
    string = input('Enter a roman number to convert to integer: ')
    print('The cardinal number of', string.upper(), 'is:',to_cardinal_numerals(string))