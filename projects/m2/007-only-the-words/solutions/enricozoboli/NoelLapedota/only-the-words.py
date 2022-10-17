def word():
    p =',.?;_-\'!:'
    q=input('Enter the text please\n').lower()        
    li = list(q)
    for r in li:
     t =r.strip(',.?;_-\'!:')
     trasf = ''.join(t)
     print(trasf)





