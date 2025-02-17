

w=input('Enter the text please......')

def capitalize(q):
  
    
    if q[0] == ' ':
         pass
        
    if ' i' or 'i 'in q :
        print(q.replace(q[(q.find('i')  )], q[(q.find('i') )].upper() ))
    if '.i' in q or'!i' in q:
        print(q.replace(q[(q.find('i')  )], q[(q.find('i') )].upper() ))
    if '?' in q:
        print(q.replace(q[(q.find('?') + 1 )], q[(q.find('?') + 1)].upper() ))
       
    if '.' in q:
        print(q.replace(q[(q.find('.') + 1 )], q[(q.find('.') + 1)].upper() ))
    if '!' in q:
        print(q.replace(q[(q.find('!') + 1 )], q[(q.find('!') + 1)].upper() )) 

    if '?i' in q:
        print(q.replace(q[(q.find('?i') + 1 )], q[(q.find('?i') + 1)].upper() ))

    if '\'i' in q:
        print(q.replace(q[(q.find('\'i') + 1 )], q[(q.find('\'i') + 1)].upper() ))

    else:
        
     print(q)
   
q = q.replace(q[0], q[0].upper())
    
capitalize(w)
