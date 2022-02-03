q= ' '
w = [] 
while q != '':
    q= input('Enter the words please\n')
    if q not in w:
         w.append(q)
    else:
        continue
print(' '.join(w))
