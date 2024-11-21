import string

def control_palindromes():
    string_initial=input("insert the string " )
    string_initial=string_initial.lower()
    new_string=string_initial.translate(str.maketrans('', '', string.punctuation))
    string_2_list=new_string.split()
    inverted_string=string_2_list[::-1]
    if (string_2_list ==inverted_string):
        print(" string is Palindromes")
    else:
        print("string is not Palindromes")


def main():
  
    
    control_palindromes()
 
  

if __name__ == "__main__":
    main()

