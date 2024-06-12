letter = {'a', 'b', 'c', 'd','e', 'f', 'g', 'h','i','j', 'k' ,'l', 'm',
 'n','o','p','q','r', 's', 't',
  'u', 'v', 'w','x','y', 'z'}
q = input('Enter the text\n')
cont = 0
for n in q:
    if n in letter:
        letter.remove(n)
        cont += 1
    else :
      continue
print(f'{cont} unique character')
