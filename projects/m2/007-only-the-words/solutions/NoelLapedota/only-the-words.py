def word():
    p =',.?;_-\'!:'
    q=input('Enter the text please\n').lower()
    li = list(q)
    for r in li:      
       if r in p:
         li.remove(r)
    q_without_punt = ''.join(li)
        
  









    
