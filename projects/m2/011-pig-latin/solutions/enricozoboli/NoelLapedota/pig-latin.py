w ='aeiou'
consonant = 'bcdfghjklmnpqrstvwxyz'
q=input('Enter the text...\n')
pig_l  = ''
pig_lv = ''
text = []
f = " "
x = q.split()
for i in x:
    if i[0] in consonant:
        for l in i:
           if l in consonant:
                      
                   z = str(i).split(l)
                   pig_l = z[1] + z[0] + l + 'ay'
                   text.append(pig_l)
                   break
            
     
    elif i[0] in w:
             pig_lv = str(i) + 'way'
             text.append(pig_l)
             break

            
    else:
         text.append(i)

    


print(f'{f.join(text)}')

