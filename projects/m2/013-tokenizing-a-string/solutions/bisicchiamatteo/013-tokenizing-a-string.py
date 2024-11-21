token_list=[]
expression_list=[]
 
def tokenizing():
    math_txt=input("insert the expresion : ")
    expression_list =list(math_txt) 
    token_tmp=""
    
    for char in expression_list:
      
        if char.isnumeric():
            token_tmp=token_tmp+char
            
        else :
            if token_tmp !="":
                token_list.append(token_tmp)
            token_list.append(char)
            token_tmp=""
            break
            
        

def main():
     tokenizing() 
     print (token_list)

if __name__ == "__main__":
    main()
