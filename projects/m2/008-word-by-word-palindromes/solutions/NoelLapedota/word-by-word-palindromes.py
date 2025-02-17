def word():
    trasf_li = ''
    p =',.?;_-\'!:'
    q=input('Enter the text please\n').lower()
    li = list(q)
    for r in li:      
       if r in p:
         li.remove(r)
    q_without_punt = ''.join(li)
    r = q.split()
    r.reverse()
    a = ' '.join(r)
    li = list(a)
    for r in li:      
       if r in p:
         li.remove(r)
    trasf = ''.join(li)
    print(trasf)
    print(q_without_punt)
    if trasf == q_without_punt :
        print('string IS a word by word palindrome')
    else  :
        print('string is NOT  a palindrome')
