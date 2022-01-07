

def string_to_token(string):

    #  Write a function that takes a string containing a mathematical expression as its only parameter.
    #  Any sequence of consecutive digits should be treated as one number token.  
    #  Each token should be a parenthesis, an operator, or a number(integer).
    #  Return the list of tokens as the function’s only result.

    tokens= []
    token_index = 0
    number_token = ''

    #remove spaces
    string = string.split()
    string = ''.join(string)

    for token in string:
        
        if token.isnumeric(): 

            # if not last string index         
            if token_index < len(string) - 1:              
                    number_token += token  

            # if last string index
            else:

                # if there are prevous consecutive numbers
                if number_token:                   
                    number_token += token
                    tokens.append(number_token)
                else:
                    tokens.append(token)
           
        # if token is not a number
        else: 

            # if there are prevous consecutive numbers
            if number_token: 
                tokens.append(number_token)
                number_token = ''
                tokens.append(token)
            else:
                tokens.append(token)     

        token_index += 1     
    return tokens
    
# You may assume that the string passed to your function always contains
#  a valid mathematical expression consisting of parentheses, operators and integers.
def main():

    #read an expression from the user and print a list of tokens.
    expression = input('Write an expression: ')
    print(string_to_token(expression))

if __name__ == '__main__':
    main()





  

    
    

        
        
       
            
            
    
        
            
                
                
            
                
    
          


       