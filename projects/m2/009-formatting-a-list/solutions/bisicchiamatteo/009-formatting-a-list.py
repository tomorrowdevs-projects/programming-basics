import string


list_word=[]
def insert_word ():

    while True:
  
        new_word= input("insert the word :  ")
        if new_word=="":
            break
     
        list_word.append(new_word)
        

def list_2_string():
   
    insert_word()
    global list_word
    for word in list_word:
       final_string=" , ".join(list_word)
    list_word=final_string.split()
    list_word[len(list_word)-2]= " and "
    for word in list_word:
       final_string=" ".join(list_word)

    print(final_string)

        


def main():
  
    list_2_string()
 
  

if __name__ == "__main__":
    main()