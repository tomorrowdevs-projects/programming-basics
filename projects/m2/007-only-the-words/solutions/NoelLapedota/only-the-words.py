def only_the_word():
    q=input('Wnter the words please\n')
    words = []
    p =',.?;_-\'!:'
    x=q.split()
    for h in x:
        li = list(h)
        for r in li:
            if r in p:
                li.remove(r)
        trasf = ''.join(li)
        print (trasf)
        
  




only_the_word()




    
