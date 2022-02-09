letter = {'a', 'b', 'c', 'd','e', 'f', 'g', 'h','i','j', 'k' ,'l', 'm',
 'n','o','p','q','r', 's', 't',
  'u', 'v', 'w','x','y', 'z'}
tx_1 = input('Enter the text\n')
tx_2= input('Enter the text\n')

for n in tx_1:
    if n in letter:
        letter.remove(n)
for y in tx_2:
    if y in letter:
        print(' They  NOT are Anagrams')
        break
    else :
       print(' They are Anagrams')
       break

