from functools import partial


def ask(question, dtype=str):
    error_msg = ""
    while True:
        user_input = input(question)
        
        try:
               value = dtype(user_input.strip())
               if value < 0:
                 error_msg = "please insert a positive integer this value  is not positive"
                 print(error_msg)
                 continue
        except ValueError:
                  error_msg = "please insert a valide integer, this value is not a number"
                  print(error_msg)
        else:
                return value
                
ask_int = partial(ask, dtype=int)

value = ask_int("insert a positive number")


def binary(n):
    
   
   if n > 1:
       binary(n//2)
   print(n % 2,end = '')

binary(value) 
      
       
      
     