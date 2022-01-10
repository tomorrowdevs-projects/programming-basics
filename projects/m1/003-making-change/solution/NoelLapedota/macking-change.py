penny_value = 1
nichel_value = 5
dimes_value = 10
quarters_value = 25
loonies_value = 100
toonies_value = 200


money = int(input("Insert the money please:"))
cent = money * 100
if cent >= 200 :
    a = cent // toonies_value
    b = cent - (a * toonies_value)
    if b == 0 :
        print("your rest is : {} toonies_value ".format(a))
        
    elif  b >= 100 :
     c = b // loonies_value
     f = cent - (a * loonies_value)
     if f == 0 :
            print("your rest is : {} toonies_value and {} loonies_value ".format(a,c))

    elif  b >=25 :
      g = f // quarters_value
      h = cent - (a * quarters_value)
      if h == 0 :
           print("your rest is : {} toonies_value , {} loonies_value and {} quarters_value  ".format(a,c,g))
           

    elif  b >= 10 :
       m = h // dimes_value
       q = cent - (a * dimes_value)
       if q == 0 :
            print("your rest is : {} toonies_value {} loonies_value , {} quarters_value and {} dimes_value ".format(a,c,m))

    elif  b >= 10 :
       p = q // dimes_value
       q = cent - (a * nichel_value)
       if q == 0 :
           print("your rest is : {} toonies_value {} loonies_value , {} quarters_value , {} dimes_value and {} nichel_value ".format(a,c,m,p))

    elif  b >= 10 :
       s = q // dimes_value
       t = cent - (a * penny_value)
       if t == 0 :
           print("your rest is : {} toonies_value {} loonies_value , {} quarters_value , {} dimes_value and {} penny_value".format(a,c,m,s))      

else:
    print(hh)
    

 


       
               
          
                       
   

 

