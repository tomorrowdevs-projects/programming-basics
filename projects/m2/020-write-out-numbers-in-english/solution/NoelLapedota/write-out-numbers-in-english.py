n = {0: '',1: 'one',2: 'two',3: 'three',
        4: 'four',5: 'five',6: 'six',7: 'seven',8: 'eight',
        9: 'nine',10: 'ten',11: 'eleven',12: 'twelve',13: 'thirteen',14: 'fourteen',
        15: 'fifteen',16: 'sixteen', 17: 'seventeen',18: 'eighteen',19: 'nineteen',}

n_1 = { 2 : 'twenty',3: 'thirty',4: 'forty',5: 'fifty',6: 'sixty',
        7: 'seventy',8: 'eighty',9: 'ninety'}
n_2 = {1:'hundred',}

def write_out(number):
    if number < 20:
        print(n.get(number))
        
    elif number > 19 and number < 100 :
        a =list(str(number))
        print(n_1.get(int(a[0])) + n.get(int(a[1])))
    elif number > 99 :
        a =list(str(number))
        if a[2] == '0':
           print(n.get(int(a[0])) + n_2.get(1) + n_1.get(int(a[1])))
        print(n.get(int(a[0])),end ='')                                        #mi dava problemi e ho messo end=''
        print( n_2.get(1) + n_1.get(int(a[1])) + n.get(int(a[2])))
   
         
write_out()
   
         

   
          
   
         
write_out(123)
   
         






write_out(145)
