import string

def main():
    
    string_initial=input("insert the word " )
    new_string=string_initial.translate(str.maketrans('', '', string.punctuation))
    string_2_list=new_string.split()
    print(string_2_list)
    

if __name__ == "__main__":
    main()

