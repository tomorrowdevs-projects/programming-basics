import string
 
txt_split=[]

def transform_txt():
     original_txt=input("insert the text : ")
     txt_split= original_txt.split()
     new_txt=[]
     for txt in txt_split:
        vowels = "aeiou"
        consonant= "bcdfghjklmnpqrstvwxyz"
        txt=txt.lower()
       
        if txt[0] in "aeiou":
            new_word=txt+"way"
            new_txt.append(new_word)
            
        elif txt[0] in "bcdfghjklmnpqrstvwxyz":
            tmp_word= txt[1:]
            new_word=tmp_word+txt[0]+"ay"
            new_txt.append(new_word)
            
        else:
            new_word=txt
            new_txt.append(new_word)

     new_string=" ".join(new_txt)
     print (new_string)
        


def main():
       
       transform_txt()
      
       

if __name__ == "__main__":
    main()
